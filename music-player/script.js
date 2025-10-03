 // Gets Elements by their IDs
      let progress = document.getElementById("progress");
      let song = document.getElementById("song");
      let ctrlIcon = document.getElementById("ctrlIcon");
      let menuIcon = document.getElementById("menuIcon");
      let volume = document.getElementById("volume");

      // When the song's metadata is loaded
      song.onloadedmetadata = function () {
        progress.max = song.duration;
        progress.value = song.currentTime;

        // Initialize volume
        volume.max = 1;
        volume.min = 0;
        volume.step = 0.1;
        volume.value = 0.3; // Set default volume to 30%
        song.volume = volume.value;

        // Format and display the actual duration
        let minutes = Math.floor(song.duration / 60);
        let seconds = Math.floor(song.duration % 60);
        if (seconds < 10) seconds = "0" + seconds;
        document.getElementById("duration").textContent =
          minutes + ":" + seconds;
      };

      // Update progress as the song plays
      song.ontimeupdate = function () {
        progress.value = song.currentTime;

        // Format and display the current time
        let currentMinutes = Math.floor(song.currentTime / 60);
        let currentSeconds = Math.floor(song.currentTime % 60);
        if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;
        document.getElementById("current").textContent =
          currentMinutes + ":" + currentSeconds;
      };

      // Play/Pause functionality
      function playPause() {
        if (ctrlIcon.classList.contains("fa-pause")) {
          song.pause();
          ctrlIcon.classList.remove("fa-pause");
          ctrlIcon.classList.add("fa-play");
        } else {
          song.play();
          ctrlIcon.classList.add("fa-pause");
          ctrlIcon.classList.remove("fa-play");
        }
      }

      // Seek functionality
      progress.oninput = function () {
        song.currentTime = progress.value;
      };

      progress.onchange = function () {
        song.play();
        song.currentTime = progress.value;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
      };

      // Volume control
      volume.oninput = function () {
        song.volume = volume.value;
      }