 import Player from '@vimeo/player';

var iframe = document.querySelector('iframe');
    var player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });