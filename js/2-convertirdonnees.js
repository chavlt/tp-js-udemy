function prevoirAge(){
    let age = prompt("Quel age avez-vous ?");
    //age = parsetInt(age); // Ne gère pas les chiffres à virgule
    //age = parseFloat(age) // comme parseInt mais gère les virgules
    age = Number(age); //On peut mettre des nombres à virgules etc, tant que c'est des chiffres, c'est la mieux à utiliser

    //Convertir un nombre en chaine de caractère 
    //nombreEnString = nombre.toString();
    alert("Bientot vous aurez " + (age + 1) + " ans");
}

prevoirAge();