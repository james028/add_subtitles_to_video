let video = document.querySelector("video");

video.addEventListener("loadedmetadata", () => {
    let track = video.addTextTrack('subtitles', 'English', 'en');

    track.mode = "showing";
    video.textTracks[0].mode = "showing"; 

    track.addCue(new VTTCue(0.5, 5, "My first Cue"));
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
 });

