AOS.init({
    duration: 3000
});

const yearElements = document.querySelectorAll('.year');
let date = new Date();
let year = date.getFullYear();
yearElements.forEach(element => {
  element.innerHTML = year;
});
