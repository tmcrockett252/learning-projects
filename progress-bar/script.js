let progress = 0;

function increaseProgress() {
    if (progress < 100) {
        progress += 10;
        document.getElementById('progressBar').style.width = progress + '%';
    }
}

function resetProgress() {
    if (progress === 100) {
        progress = 0;
        document.getElementById('progressBar').style.width = '0%';
    }
}

