  const video = document.getElementById("staffVideo");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  // Play video
  playBtn.addEventListener("click", () => {
    video.play();
    playBtn.style.display = "none"; // hide play button
    pauseBtn.style.display = "block"; // show pause button
  });

  // Pause video
  pauseBtn.addEventListener("click", () => {
    video.pause();
    playBtn.style.display = "block"; // show play button
    pauseBtn.style.display = "none"; // hide pause button
  });

  // If video is paused manually
  video.addEventListener("pause", () => {
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
  });
