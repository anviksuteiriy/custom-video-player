const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const timestamp = document.getElementById('timestamp');
const progress = document.getElementById('progress');


//video play pause 
function toggleVideoStatus() {
  if (video.paused) {
    video.play(); // video api function
  } else {
    video.pause(); // video api function
  }
}

// update icons when play/paused
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}

//update progress bar location and timer for player
function updateProgress() {
  progress.value = video.currentTime / video.duration * 100;
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// update vide duration when drag progress bar
function setVideoProgress() {
  video.currentTime = parseInt(progress.value) * video.duration / 100;
}

// Event Listners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
