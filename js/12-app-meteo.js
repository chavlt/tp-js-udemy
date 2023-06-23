 let cityContainer = document.querySelector('#ville');
let temperatureContainer = document.querySelector('#temperature_label');

let changeCityBtn = document.querySelector('#changer');


changeCityBtn.addEventListener('click', () => {
  var villeChoisie = prompt("Entrez le nom d'une ville : ");

  getCityWeather(villeChoisie);
})

window.addEventListener('DOMContentLoaded', () => {
  let city = 'belfort';
  
  getCityWeather(city);
})

function getCityWeather(city){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=76759fd2302cb3e1dc6ff5e0a74c305d&units=metric`;
  let requete = new XMLHttpRequest();

  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();
  
  requete.onload = function(){
    if(requete.readyState === XMLHttpRequest.DONE){
      if(requete.status === 200){
        let response = requete.response;
        
        console.log("Température à Belfort");
        console.log(response.main.temps);
  
        cityContainer.innerHTML = response.name;
        temperatureContainer.innerHTML = response.main.temp;
      }
      else{
        console.log("Oups !");
      }
    }else{
      alert('Il y a une erreur');
    }
  }
}