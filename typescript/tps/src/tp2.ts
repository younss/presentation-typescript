/**
 * Les valeurs par défault
 */
var tp2Container = document.getElementById("tp2_result");
var result = "";
// fonction ici

function imprimerInformationsPersonnelles(prenom, nom, pays="CANADA"){
    result = "Informations Personnelles: <br> prenom: " + prenom + "<br> nom: " + nom + "<br> pays: " + pays;
    console.log(result);
}

//imprimerInformationsPersonnelles("Bob", "Marley");

tp2Container.innerHTML= result;
