var changeColorOnHover = function(changeColor) {
    var originalColor = "#4caf50";
    var newColor = "#af7f4c";

    if (changeColor) {
        document.getElementById("greeting").style.color = newColor;
    } else {
        document.getElementById("greeting").style.color = originalColor;
    }
}