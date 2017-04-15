var fs = require('fs');
var gulp = require('gulp');
var Server = require('karma').Server;
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var header = require('gulp-header');
var footer = require('gulp-footer');
var rename = require('gulp-rename');
var es = require('event-stream');
var del = require('del');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var git = require('gulp-git');
var bump = require('gulp-bump');
var runSequence = require('run-sequence');
var connect = require('gulp-connect');
var angularProtractor = require('gulp-angular-protractor');
var sourcemaps = require('gulp-sourcemaps');
var versionAfterBump;

gulp.task('default', ['build', 'test']);
gulp.task('build', ['scripts']);
gulp.task('test', ['build', 'protractor', 'karma']);

gulp.task('watch', ['build', 'karma-watch'], function () {
    gulp.watch(['src/**/*.{js,html}'], ['build']);
});

gulp.task('clean', function (cb) {
    del(['dist'], cb);
});

gulp.task('scripts', ['clean'], function () {

    var buildLib = function () {
        return gulp.src(['src/*.js'])
            .pipe(plumber({
                errorHandler: handleError
            }))
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'));
    };
    var config = {
        pkg: JSON.parse(fs.readFileSync('./package.json')),
        banner: '/*!\n' +
        ' * <%= pkg.name %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' * Version: <%= pkg.version %> - <%= timestamp %>\n' +
        ' */\n\n\n'
    };

    return es.merge(buildLib())
        .pipe(plumber({
            errorHandler: handleError
        }))
        .pipe(concat(config.pkg.name+'.js'))
        .pipe(header(config.banner, {
            timestamp: (new Date()).toISOString(), pkg: config.pkg
        }))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('dist'));

});

gulp.task('karma', ['build'], function (callback) {
    runKarma(true, callback);
});
gulp.task('karma-watch', ['build'], function (callback) {
    runKarma(false, callback);
});

function runKarma(singleRun, callback) {
    var server = new Server({configFile: __dirname + '/karma.conf.js', singleRun: singleRun}, function (exitCode) {
        callback();
    });
    server.start();
}

gulp.task('protractor', ['build'], function (callback) {
    runProtractor('protractor.config.js', callback);
});

var runProtractor = function (configFile, callback) {
    connect.server({
        port: 8000
    });

    gulp.src(['test/*.e2e.js'])
        .pipe(angularProtractor({
            'configFile': configFile,
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function (e) {
            callback(e);
        })
        .on('end', function () {
            connect.serverClose();
            callback();
        });
};

var handleError = function (err) {
    console.log(err.toString());
    this.emit('end');
};

gulp.task('release:bump', function () {
    var type = process.argv[3] ? process.argv[3].substr(2) : 'patch';
    return gulp.src(['./package.json'])
        .pipe(bump({type: type}))
        .pipe(gulp.dest('./'))
        .on('end', function () {
            versionAfterBump = require('./package.json').version;
        });
});

gulp.task('release:rebuild', function (cb) {
    runSequence('release:bump', 'build', cb); // bump will here be executed before build
});

gulp.task('release:commit', ['release:rebuild'], function () {
    return gulp.src(['./package.json', 'dist/**/*'])
        .pipe(git.add())
        .pipe(git.commit('Release '+ versionAfterBump));
});

gulp.task('release:tag', ['release:commit'], function () {
    git.tag(versionAfterBump, versionAfterBump);
});

gulp.task('release:push', function () {
    git.push('origin', 'master', {args: " --tags"}, function (err) {
        if (err) throw err;
    });
});

gulp.task('release', ['release:tag'], function(){
    runSequence('release:push');
});
