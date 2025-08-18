let progress = 0;

function increaseProgressSlowly() {
    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 2; // Increase by 2% each time
            document.getElementById('progressBar').style.width = progress + '%';
        } else {
            clearInterval(interval); // Stop when it reaches 100%
        }
    }, 100); // Update every 100 milliseconds
}

function resetProgress() {
    if (progress === 100) {
        progress = 0;
        document.getElementById('progressBar').style.width = '0%';
    }
}

