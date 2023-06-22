let button = document.querySelector('.spoiler-button');
let hiddenText = document.querySelector('.hidden-text');
let hidden = true;

button.addEventListener('click', () => {
  if(hidden == true){
    button.innerHTML = "Cacher"
    hiddenText.style.display = "block";
    hidden = false;
  }else{ 
    button.innerHTML = "Afficher";
    hiddenText.style.display = "none";
    hidden = true;
  }
})