import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

var iframe = document.querySelector('iframe');
    var player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


const throttleFunction = throttle(function (seconds) {
    localStorage.setItem("videoplayer-current-time", seconds)
    console.log('throttle')
}, 1000);


player.on('timeupdate', function (data) {
    throttleFunction(data.seconds)
});

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





