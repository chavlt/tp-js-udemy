/* __________________________________ XMLHttpRequest __________________________________ */

/* 
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
 */



/* __________________________________ Fetch __________________________________ */

/* const url = 'https://lesoublisdelinfo.com/api.php';

async function envoyerPrenom(prenom){
  const requete = await fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      prenom // meme chose que 'prenom: prenom' (2eme prenom est le paramètre)
    })
  });

  if(!requete.ok){
    console.log("IL Y A EU UN PROBLEME");
  }else{
    let data = await requete.json();
    console.log(data);
  }
}

envoyerPrenom('Elon'); */



/* __________________________________ Axios __________________________________ */

const url = 'https://lesoublisdelinfo.com/api.php';

const axiosInstancePost = axios.create({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
});

axiosInstancePost.post(url, new URLSearchParams({
  prenom: 'Steve'
}))
  .then(function(donnees){
    console.log(donnees.data);
  })
  .catch(function(erreur){
    console.log(erreur);
  })


  // Si on utilise du JSON 
  /*
  const axiosInstancePost = axios.create({
    headers: {
      'Content-Type': 'application/json'
    }
  });

  axiosInstancePost.post(url,{
    prenom: 'Steve'
  })
    .then(function(donnees){
      console.log(donnees.data);
    })
    .catch(function(erreur){
      console.log(erreur);
    })
  */


    // Pour ne pas mettre tous le temps l'url entier on peut faire ça : 
    /* 
    const axiosInstancePost = axios.create({
      headers: {
        'Content-Type': 'application/json'
      },
      baseURL: 'https://lesoublisdelinfo.com/api.php'
    });
  
    axiosInstancePost.post('api.php',{
      prenom: 'Steve'
    })
      .then(function(donnees){
        console.log(donnees.data);
      })
      .catch(function(erreur){
        console.log(erreur);
      })

    */