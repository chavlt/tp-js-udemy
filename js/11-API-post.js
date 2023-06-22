const url = 'https://lesoublisdelinfo.com/api.php';

let requete = new XMLHttpRequest();

// GET
//requete.open("GET", url);
//requete.responseType = "json";
//requete.send();

// POST
requete.open('POST', url);
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
requete.responseType = "json";
requete.send('prenom=John'); // Quand 1 paramètre à envoyer
//requete.send('prenom=John&nom=Doe'); // Quand 2 paramètres à envoyer


requete.onload = function(){
  if(requete.readyState === XMLHttpRequest.DONE){
    if(requete.status === 200){
      let reponse = requete.response;
      console.log(reponse);
    }
    else{
      alert('Un problème est intervenu, merci de revenir plus tard');
    }
  }
}