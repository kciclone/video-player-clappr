(function () {

    angular.module('demo', ['video'])
        .controller('Controller', Controller);

    function Controller($scope) {
        $scope.parameters = {src: 'http://ie.microsoft.com/testdrive/ieblog/2011/nov/pp4_blog_demo.mp4'};
    }

})();