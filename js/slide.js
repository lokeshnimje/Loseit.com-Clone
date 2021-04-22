// slider for landing page
var preindx = 1;
function slide (slideIndex) {
    debugger;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
 }
slide(1);

    