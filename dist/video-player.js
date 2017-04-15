/*!
 * video-player
 * 
 * Version: 0.0.1 - 2017-04-15T03:15:37.353Z
 */


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWRlby1wbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiB2aWRlby1wbGF5ZXJcbiAqIFxuICogVmVyc2lvbjogMC4wLjEgLSAyMDE3LTA0LTE1VDAzOjE1OjM3LjM1M1pcbiAqL1xuXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3ZpZGVvJywgW10pLmRpcmVjdGl2ZSgncGxheWVyJywgcGxheWVyKTtcblxuICAgIGZ1bmN0aW9uIHBsYXllcigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZC1yZXNwb25zaXZlLTE2Ynk5XCI+JyArXG4gICAgICAgICAgICAnPGRpdiBpZD1cInBsYXllclwiIGNsYXNzPVwiZW1iZWQtcmVzcG9uc2l2ZS1pdGVtXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM6ICc9J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSkge1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IENsYXBwci5QbGF5ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzY29wZS5wYXJhbWV0ZXJzLnNyYywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6ICcjcGxheWVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheTogc2NvcGUucGFyYW1ldGVycy5hdXRvUGxheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkOiAnbWV0YWRhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY3ljbGVWaWRlbzogdHJ1ZSwgLy8gUmVjeWNsZSA8dmlkZW8+IGVsZW1lbnQgZm9yIG1vYmlsZSBkZXZpY2UuIChkZWZhdWx0IGlzIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhY29udHJvbDogc2NvcGUucGFyYW1ldGVycy5tZWRpYUNvbnRyb2wsLy97c2Vla2JhcjogXCIjRTExM0QzXCIsIGJ1dHRvbnM6IFwiIzY2QjJGRlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Rlcjogc2NvcGUucGFyYW1ldGVycy5wb3N0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn0pKCk7Il0sImZpbGUiOiJ2aWRlby1wbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
