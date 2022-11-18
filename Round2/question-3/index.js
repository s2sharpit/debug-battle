console.log("Debug Battle");

f = 0;

function blink() {
    if (f == 1) {
        document.querySelector(".ball").style.transform = "scale(2)";
        f = 0;
    }
    else {
        document.querySelector(".ball").style.transform = "scale(1)";
        f = 1;
    }
}

setInterval(blink, 600);
