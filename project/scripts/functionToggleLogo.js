// function toggle logo which changes the logo image by clicking the button with id toggleLogo
const toggleLogo = document.querySelector("#toggleLogo")
toggleLogo.addEventListener('click', function() {
    var logo = document.querySelector("#img");
    if (logo.src.match("logo.jpg")) {
        logo.src = "images/logo2.jpg";
    } else {
        logo.src = "images/logo.jpg";
    };
});