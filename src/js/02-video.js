import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const videoplayer_current_time = 'current time';
const onPlay = throttle(({ seconds }) => {
    localStorage.setItem(videoplayer_current_time, seconds);
}, 1000);

player.setCurrentTime(localStorage.getItem(videoplayer_current_time)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
    });

    player.on('timeupdate', onPlay);





