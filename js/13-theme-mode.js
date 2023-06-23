let button = document.querySelector('#mode');
let textButton = document.querySelector('#mode span');
let body = document.querySelector('body');
let userChoice = localStorage.getItem('theme');

if(userChoice != undefined){
  if(userChoice == "sombre"){
    modeSombre();
  }
}

button.addEventListener('click', () => {
  if(body.classList.contains('dark')){
    console.log("il a la classe dark");
    body.classList.remove('dark');
    textButton.textContent = "Thème sombre";
    localStorage.setItem('theme', 'clair');
  }else{
    console.log("il n'a pas la classe dark");
    modeSombre();
  }
})

function modeSombre(){
  body.classList.add('dark');
  textButton.textContent = "Thème sombre";
  localStorage.setItem('theme', 'sombre');
}