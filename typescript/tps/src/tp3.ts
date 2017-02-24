/**
 * Les templates de chaines de caractères
 */
var tp3Container = document.getElementById("tp3_result");
var result = "";
// fonction ici
function imprimerInformationsPersonnellesV3(prenom, nom, pays="CANADA"){
    result = `Informations Personnelles <br> prenom: ${prenom}<br> nom: ${nom} <br> pays: ${pays}`;
    console.log(result);
}

//imprimerInformationsPersonnellesV3("Oliver ", "James","CANADA");
tp3Container.innerHTML= result;
