var index = 0;
window.onload = function () {
    document.getElementById("slide").addEventListener('click',showSlides);
}
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    var text = document.getElementsByClassName("text");
    var button = document.getElementById("slide");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
       text[i].style.display ="none";
    }
    index++;
    button.style.display = "none";
    if (index > slides.length) {index = 1}    
    slides[index-1].style.display = "block";
    slides[index-1].style.height = "400px";
    text[index-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}    


