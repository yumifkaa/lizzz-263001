
let btnRight= document.querySelector(".btnRight");
let btnLeft = document.querySelector(".btnLeft");
let slides = document.getElementsByClassName('pic');
let i = 0;
function rightbtn() {
    --i;
    if (i < 0) {
    slides[i+1].classList.remove("block");
    i = slides.length-1;
    slides[i].classList.add("block");
    } else {
    slides[i+1].classList.remove("block");
    slides[i].classList.add("block");
    }
}
function leftbtn(){
    --i;
    if (i < 0) {
    slides[i+1].classList.remove("block");
    i = slides.length-1;
    slides[i].classList.add("block");
    } else {
    slides[i+1].classList.remove("block");
    slides[i].classList.add("block");
    }
}
btnRight.addEventListener("click", rightbtn);
btnLeft.addEventListener("click", leftbtn);

setInterval(rightbtn, 5000);