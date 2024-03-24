document.addEventListener("DOMContentLoaded", function() {
    var slideShowContainer = document.getElementById("background-photo");
    //replacing the actual image with the first image in the array
    var photos = ["./images/slide2.png","./images/slide1.jpg"]; 
    var currentPhoto = 0;
    var interval = 5000; // 5 seconds
    //function to display the next image
    function nextPhoto(){
        currentPhoto = (currentPhoto + 1) % photos.length;
        slideShowContainer.style.backgroundImage = "url('" + photos[currentPhoto] + "')";
    }

    //function to start the slideshow
    function startSlideShow(){
        slideShowContainer.style.backgroundImage = "url('" + photos[currentPhoto] + "')";
        setInterval(nextPhoto, interval);
    }
    startSlideShow();
 });