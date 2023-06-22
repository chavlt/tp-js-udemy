function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15){
    let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation)
    return resultat;
}
 let tempsDePreparationChocolat = cuisiner(4);
 let tempsDePreparationFraisier = cuisiner(1, 20);
 console.log(tempsDePreparationFraisier + tempsDePreparationChocolat);