import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

function savedTime(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log('throttle')
}

player.on('timeupdate', throttle(savedTime, 1000));

const seconds = localStorage.getItem("videoplayer-current-time");

if (seconds) {
   player.setCurrentTime(seconds).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
}); 
}





