const play = document.querySelector("#play")
const stopVideo = document.querySelector("#stop")
const progress = document.querySelector("#progress")
const timestamp = document.querySelector("#timestamp")
const video = document.querySelector("#video")

video.addEventListener("click", toggleVideoStatus)
video.addEventListener("pause", updatePlayIcon)
video.addEventListener("play", updatePlayIcon)
video.addEventListener("timeupdate", updateProgress)


play.addEventListener("click", toggleVideoStatus)
stopVideo.addEventListener("click", stoppedVideo)
progress.addEventListener("change", setVideoProgress)


function toggleVideoStatus() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}


function updatePlayIcon() {
  if (video.paused) {
    play.children[0].className = "fa fa-play fa-2x"
  } else {
    play.children[0].className = "fa fa-pause fa-2x"
  }
}


function stoppedVideo() {


  video.currentTime = 0
  video.pause()
}


function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100

  let mins = Math.floor(video.currentTime / 60)
  if (mins < 10) {
    mins = `0${String(mins)}`
  }

  let secs = Math.floor(video.currentTime % 60)
  if (secs < 10) {
    secs = `0${String(secs)}`
  }

  timestamp.textContent = `${mins}:${secs}`
}


function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100
}