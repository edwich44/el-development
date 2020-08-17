var video = document.getElementById('video-hero');

if(video && video !== undefined) {
    var windowWidth = window.innerWidth;
    var maxWidth =  parseInt(video.dataset.maxWidth);

    if (windowWidth <= maxWidth) {
        //It is a small screen
        var sources = video.getElementsByTagName('source');
        sources[0].src = "";
        video.setAttribute('poster', '/images/working-space_snapshot_mobile.jpg');
        video.load();
    }
}

