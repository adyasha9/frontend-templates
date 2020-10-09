/* Toggle between adding and removing the "responsive" class to naval when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "naval") {
        x.className += " responsive";
    } else {
        x.className = "naval";
    }
}