function toggleMenu(){
    var element = document.querySelector('nav');
    element.classList.toggle('view');
    element = document.getElementById("menuArrow");
    element.classList.toggle("arrowActive");
}