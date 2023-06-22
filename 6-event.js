let a = document.querySelector('.a');
let button = document.querySelector('button');
let html = document.querySelector('html');

button.onmouseover = () => {
  html.style.background = "orange";
}

button.onmouseleave = () => {
  html.style.background = "white";
}