import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
// import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const STORAGE_KEY = 'ideoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

player
  .setCurrentTime(localStorage.getItem(STORAGE_KEY))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

document.addEventListener('');

function onTimeUpdate(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}
