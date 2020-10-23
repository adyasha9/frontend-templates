function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "naval") {
        x.className += " responsive";
    } else {
        x.className = "naval";
    }
}