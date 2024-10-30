function menuBarManager() {
    let menuBody = document.querySelector('.menuBody');
    if (menuBody.style.display=="none") {
        menuBody.style.display = "block";
    } else {
        menuBody.style.display = "none";
    }
}
function changeColor() {
    let elements = document.querySelectorAll("*:not(.noChange)");
    let base = document.querySelector('.base');
    let head1 = document.querySelector('.head1');
    let mBody = document.querySelector('.mBody');
    let menuBody = document.querySelector('.menuBody');
    let mainBody = document.querySelector('.mainBody');
    if (base.style.color=="white") {
        elements.forEach(element => {
            element.style.color = "black";
        });
        head1.style.backgroundColor = "#e7e9eb";
        mBody.style.backgroundColor = "#e7e9eb";
        menuBody.style.backgroundColor = "#ddd";
        mainBody.style.backgroundColor = "#8a9399";
    } else {
        elements.forEach(element => {
            element.style.color = "white";
        });
        head1.style.backgroundColor = "#2d3748";
        mBody.style.backgroundColor = "#2d3748";
        menuBody.style.backgroundColor = "#263c4e";
        mainBody.style.backgroundColor = "#000000";
    }
}
function menuBar2() {
    let div = document.querySelector('.menuExtra1');
    if (div.style.display == "flex") {
        div.style.display = "none";
    } else {
        div.style.display = "flex";
    }
}

function searcherBar() {
    let div = document.querySelector('.searchBar');
    if (div.style.display == "flex") {
        div.style.display = "none";
    } else {
        div.style.display = "flex";
    }
}