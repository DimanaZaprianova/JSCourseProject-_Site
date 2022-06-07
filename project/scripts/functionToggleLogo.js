// function toggle logo which changes the logo image by clicking the button with id toggleLogo
document.getElementById("toggleLogo").onclick = function() {
    var logo = document.getElementsByTagName("img")[0];
    if (logo.src.match("logo.jpg")) {
        logo.src = "images/logo2.jpg";
    } else {
        logo.src = "images/logo.jpg";
    }
};