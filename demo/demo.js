(function () {

    angular.module('demo', ['video.player.clappr'])
        .controller('Controller', Controller);

    function Controller($scope) {
        $scope.parameters = {src: 'http://localhost/walking.mp4'}; //http://ie.microsoft.com/testdrive/ieblog/2011/nov/pp4_blog_demo.mp4
    }

})();