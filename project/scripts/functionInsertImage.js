function insertImage() {
    var image = document.getElementById("showImage").value;
    
    const src = 'https://picsum.photos/200/300';
    
    // create img element object
    const img = document.createElement('img');	
    img.setAttribute("src", "https://picsum.photos/200/300");
    img.setAttribute("height", "200px");
    
    // attach img before h1:
    const above = document.getElementById("showImage");
    document.body.querySelector("aside").append(img);
    // document.getElementById("showImage").insertBefore(above, img);
};
            
const btn = document.getElementById("showImage");
// onclick="insertImage(this)"

btn.addEventListener('click', insertImage);


// toggle button name to The Image
btn.addEventListener('click', function() {
    btn.innerHTML = "The Image";
});
// after one click and one image has been inserted remove the event listener

btn.addEventListener('click', function() {
    btn.removeEventListener('click', insertImage);
});

