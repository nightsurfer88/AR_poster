AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const videoElement = document.querySelector("#video");

        // Add a click event listener to the animatedMarker
        animatedMarker.addEventListener('click', function() {
            if (videoElement) {
                if (videoElement.paused) {
                    videoElement.play(); // Play the video if it's paused
                } else {
                    videoElement.pause(); // Pause the video if it's playing
                }
            }
        });
    }
});
