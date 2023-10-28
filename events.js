AFRAME.registerComponent('markerhandler', {
    init: function () {
        const animatedMarker = document.querySelector("#animated-marker");
        const videoElement = document.querySelector("#video");

        // Add a click event listener to the animatedMarker
        animatedMarker.addEventListener('click', function () {
            if (videoElement) {
                videoElement.play(); // Play the video
            }
        });
    },
});
