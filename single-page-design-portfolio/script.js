const imageSlide = document.querySelector(".image-slider-container__slide");
const slideImages = document.querySelectorAll(".image-slider-container__slide img");

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Image Counter

let counter = 1;
const size = slideImages[0].clientWidth;
// Moves one picture forward
imageSlide.style.transform = `translateX(${-size * counter}px`;

//Button events

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    imageSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    imageSlide.style.transform = `translateX(${-size * counter}px`;

});

nextBtn.addEventListener('click', () => {
    if(counter >= slideImages.length - 1) return;
    imageSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    imageSlide.style.transform = `translateX(${-size * counter}px`;

});

imageSlide.addEventListener('transitionend', ()=>{
    if (slideImages[counter].id === "lastClone"){
        imageSlide.style.transition = "none";
        counter = slideImages.length - 2;
        imageSlide.style.transform = `translateX(${-size * counter}px`;
    }
    if (slideImages[counter].id === "firstClone"){
        imageSlide.style.transition = "none";
        counter = slideImages.length - counter;
        imageSlide.style.transform = `translateX(${-size * counter}px`;
    }
})