function slideshow() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    index++;
    if (index > x.length) {index = 1}    
    x[index-1].style.display = "block";  
    setTimeout(slideshow, 8000);
}

function addtobasket() {
    alert("Tuote lisättiin ostoskoriin!");
}