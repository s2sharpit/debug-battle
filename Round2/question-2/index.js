let l = 0;
function clickME(m) {
    l += m;
    document.querySelector(".count").innerHTML = l;
    if(l % 2 == 0) {
        document.querySelector(".count").style.background = "red";
    } else {
        document.querySelector(".count").style.background = "green";

    }
}
console.log(l);