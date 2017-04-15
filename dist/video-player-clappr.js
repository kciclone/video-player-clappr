/*!
 * video-player-clappr
 * 
 * Version: 0.0.1 - 2017-04-15T16:49:13.429Z
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWRlby1wbGF5ZXItY2xhcHByLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogdmlkZW8tcGxheWVyLWNsYXBwclxuICogXG4gKiBWZXJzaW9uOiAwLjAuMSAtIDIwMTctMDQtMTVUMTY6NDk6MTMuNDI5WlxuICovXG5cblxuKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgndmlkZW8nLCBbXSkuZGlyZWN0aXZlKCdwbGF5ZXInLCBwbGF5ZXIpO1xuXG4gICAgZnVuY3Rpb24gcGxheWVyKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGlkPVwicGxheWVyXCIgY2xhc3M9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyczogJz0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlKSB7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAgICAgICAgICAgICBuZXcgQ2xhcHByLlBsYXllcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHNjb3BlLnBhcmFtZXRlcnMuc3JjLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogJyNwbGF5ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5OiBzY29wZS5wYXJhbWV0ZXJzLmF1dG9QbGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWQ6ICdtZXRhZGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjeWNsZVZpZGVvOiB0cnVlLCAvLyBSZWN5Y2xlIDx2aWRlbz4gZWxlbWVudCBmb3IgbW9iaWxlIGRldmljZS4gKGRlZmF1bHQgaXMgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFjb250cm9sOiBzY29wZS5wYXJhbWV0ZXJzLm1lZGlhQ29udHJvbCwvL3tzZWVrYmFyOiBcIiNFMTEzRDNcIiwgYnV0dG9uczogXCIjNjZCMkZGXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyOiBzY29wZS5wYXJhbWV0ZXJzLnBvc3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufSkoKTsiXSwiZmlsZSI6InZpZGVvLXBsYXllci1jbGFwcHIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
