let video = document.querySelector("video");

video.addEventListener("loadedmetadata", () => {
    let track = video.addTextTrack('subtitles', 'English', 'en');

    track.mode = "showing";
    video.textTracks[0].mode = "showing"; 

    track.addCue(new VTTCue(0.5, 5, "My first Cue"));
    track.addCue(new VTTCue(8, 13, "We are on the market since 2008, constantly developing innovative technology and products."));
    track.addCue(new VTTCue(5.1, 9.5, "My <u>underlined</u> Cue"));
    track.addCue(new VTTCue(5.1, 9.5, "My <u>underlined</u> Cue"));
    track.addCue(new VTTCue(9.6, 14.8, "My <c.small>small classname</c> Cue"));
    track.addCue(new VTTCue(15, 36, "My <c.customstyle>custom classname</c> Cue"));


    //for (var i = 0; i < video.textTracks.length; i++) {
        let subtitles = document.getElementById("subtitles");

        //subtitles.addEventListener("click", () => {
                //track.mode.classList.add("hide");
                //console.log("sub");
        //});
        subtitles.onclick = function() {
            track.mode.classList.add("hide");
                console.log("sub");
        }
    //}
    
    
   
    //button play/pause
    let start = document.getElementById("playpause");

    start.addEventListener("click", () => {
        video.paused ? video.play() : video.pause();
    });

    let stop = document.getElementById("stop");

    stop.addEventListener("click", () => {
        video.pause();
        video.currentTime = 0;
    });

    let mute = document.getElementById("mute");

    mute.addEventListener("click", () => {
        video.muted = !video.muted;
    });


    //fullscreen
    let videoContainer = document.getElementById('videoContainer');

    const isFullScreen = () =>  {
        return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
    }

    const handleFullscreen = () => {
        if (isFullScreen()) {
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                else if (document.msExitFullscreen) document.msExitFullscreen();
                setFullscreenData(false);
            }
            else {
                if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
                else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
                else if (videoContainer.webkitRequestFullScreen) {
                    video.webkitRequestFullScreen();
                }
                else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
                setFullscreenData(true);
            }
        }

        let fs = document.getElementById("fs");

        fs.addEventListener("click", () => {
            handleFullscreen();
        });
 });

