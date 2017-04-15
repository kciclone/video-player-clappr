# video-player-clappr

Angular directive to play videos MP4 format.

## Install

Manual: download latest from here
Bower:
bower install video-player-clappr --save

Add script in application

```html
<script type="text/javascript" src="bower_components/video-player-clappr/dist/video.player.clappr.min.js"></script>
```

```html
<player id="playerComponent" parameters="parameters"></player>
```

Adicione o módulo nas dependências:

```javascript
angular.module('myApp', ['video.player.clappr', ...])
```

##Parameters
```json
    {   
        "src": "http://your-video.com.br/video.mp4",
        "autoPlay": "true/false",
        "mediacontrol": {"seekbar": "#E113D3", "buttons": "#66B2FF"}, // No required. This field to permit customize style action buttons and seek bar. 
        "poster": "http://your-image/image.jpg" // No required. This field alter initial image background before to play video.
    }
```