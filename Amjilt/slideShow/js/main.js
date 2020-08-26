var myImages = ["img/2.jpg", "img/3.jpg", "img/4.jpg"]
var images = document.querySelector("img")
var i = 1
var isPaused = false

function togglePause() {
    if (!isPaused) {
        clearInterval(intervalId)
    } else {
        intervalId = setInterval(myFunction, 1000)
    }
    isPaused = !isPaused
    console.log(isPaused)
}

function myFunction() {
    images.src = myImages[i]
    i++
    if (i == myImages.length) {
        i = 0
    }
}
var intervalId = setInterval(myFunction, 1000)