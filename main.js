let next = document.querySelector(".right");
let previous = document.querySelector(".left");
let image_1 = document.querySelector(".img-1");
// image_1.style.marg = "100%"
next.onclick = ()=>{
    image_1.style.marginLeft = "-100%";
}