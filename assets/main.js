
let hidden = false

document.getElementById("menu").onclick = function () {
    console.log(hidden);
    hidden ?  document.getElementById("mob_wrapper").style.left = "-100%" : document.getElementById("mob_wrapper").style.left = "0"
    hidden = !hidden
    return hidden
}
