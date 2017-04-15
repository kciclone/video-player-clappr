(function () {
    'use strict';

    angular.module('video', []).directive('player', player);

    function player() {
        return {
            restrict: 'AE',
            template: '<div class="embed-responsive embed-responsive-16by9">' +
            '<div id="player" class="embed-responsive-item"></div>' +
            '</div>',
            replace: true,
            scope: {
                parameters: '='
            },
            link: function (scope) {

                function init() {
                    new Clappr.Player(
                        {   
                            source: scope.parameters.src, 
                            parentId: '#player',
                            autoPlay: scope.parameters.autoPlay,
                            preload: 'metadata',
                            recycleVideo: true, // Recycle <video> element for mobile device. (default is false)
                            mediacontrol: scope.parameters.mediaControl,//{seekbar: "#E113D3", buttons: "#66B2FF"}
                            poster: scope.parameters.poster
                        }
                    );
                }
                init();
            }
        };
    }
})();