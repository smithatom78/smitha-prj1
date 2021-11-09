var item = document.getElementById("myimg");

var item1 = document.querySelector("#mydiv ");

function hide() {

    item.setAttribute("hidden", "false")

}

function chimg() {

    item1.innerHTML = "<p>missing image</p>";

}

function resetimg() {
    var item = document.getElementById("myimg");
    item.removeAttribute("src", "images/logo-small.png");
    item.setAttribute("src", "images/logo.png");


}

function changeme() {
    var item = document.getElementById("myimg");
    item.removeAttribute("src", "images/logo.png");
    item.setAttribute("src", "images/logo-small.png");


}

function show() {

    item.removeAttribute("hidden", "true");


}