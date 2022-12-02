import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on("timeupdate", throttle(function (time) {
    console.log(time);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(time));
}), 1000);

savedTime();

function savedTime() {
    const savedTimeProgress = localStorage.getItem("videoplayer-current-time");
    const parsedSavedTimeProgress = JSON.parse(savedTimeProgress);

    if (savedTimeProgress) {
        player.setCurrentTime(parsedSavedTimeProgress.seconds);
    }
}
