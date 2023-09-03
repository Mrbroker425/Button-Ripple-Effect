const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("mouseover",(event) => {
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;

    const ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    btnE1.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    },1000);
    




});


