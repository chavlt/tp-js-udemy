function calculerIMC(poids, taille){
    poids = prompt("Quel est votre poids (en kg) ?");
    taille = prompt("Quel est votre taille (en cm) ?");

    let tailleEnMetre = taille / 100;
    let tailleCalculee = Math.pow(tailleEnMetre, 2);
    let resultat = poids / tailleCalculee;
    console.log(resultat);
    return resultat;
}

console.log

calculerIMC();

