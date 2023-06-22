const url = "https://blockchain.info/ticker";

function loadPrice() {
  // Créer une requête
  let requete = new XMLHttpRequest(); // Créer un objet

  // Premier paramètre GET / POST
  // (get -> récupère des données depuis une URL / post -> permet d'envoyer des données comme avec un formulaire )
  // Deuxième paramètre: url
  requete.open("GET", url); // On ouvre une nouvelle requete (on initialise)
  requete.responseType = "json"; // Nous attendons du JSON en retour (on peut attendre aussi du texte)
  requete.send(); // Nous envoyer notre requete

  // Dès qu'on reçoit une réponse, cette fonction est exécutée
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      // vérifie que la requête est terminée + vérifie si c'est le meme type de valeur en réponse
      if (requete.status === 200) {// 200 = tout s'est bien passé / on vérifie que tout s'est bien passé
        let reponse = requete.response; // On stocke la réponse
        let prixEnEuros = reponse.EUR.last;

        //console.log(reponse);
        console.log(prixEnEuros);

        document.querySelector("#price_label").textContent = prixEnEuros;
      } else {
        alert("un problème est intervenu, merci de revenir plus tard");
      }
    }
  };
}

setInterval(loadPrice, 2000);
