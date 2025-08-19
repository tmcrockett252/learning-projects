let progress = 0;

function increaseProgress() {
  if (progress < 100) {
    progress += 10;
    document.getElementById("progressBar").style.width = progress + "%";

  }
}
