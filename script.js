let images = document.querySelectorAll(".slides img")

let intervalId = null;
let index = 0;

document.addEventListener("DOMContentLoaded", initializeSlide);

function initializeSlide(){
    if(images.length > 0){
        images[index].classList.add("display");
        intervalId = setInterval(nextSlide, 3000);
    }
}

function showSlide(Kindex){
    if(Kindex >= images.length){
        index = 0;
    }
    else if(Kindex < 0){
        index = images.length - 1;
    }

    images.forEach(slide => {
        slide.classList.remove("display");
    })
    images[index].classList.add("display");
}

function prevSlide(){
    clearInterval(intervalId);
    index--;
    showSlide(index);
}

function nextSlide(){
    index++;
    showSlide(index);
}


