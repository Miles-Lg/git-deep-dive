const playVideo = document.querySelector("#play")
const stopVideo = document.querySelector("#stop")
const progress = document.querySelector("#progress")
const timestamp = document.querySelector("#timestamp")
const video = document.querySelector("#video")

video.addEventListener("click", toggleVideoStatus)
video.addEventListener("pause", updatePlayIcon)
video.addEventListener("play", updatePlayIcon)
video.addEventListener("timeupdate", updateProgress)


playVideo.addEventListener("click", toggleVideoStatus)
stopVideo.addEventListener("click", stoppedVideo)
progress.addEventListener("change", setVideoProgress)


function toggleVideoStatus() { return true }


function updatePlayIcon() { return true }


function updateProgress() { return true }


function stoppedVideo() { return true }


function setVideoProgress() { return true }