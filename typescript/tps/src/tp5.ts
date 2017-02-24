/**
 * les boucles
 */
var tp5Container = document.getElementById("tp5_result");
var result = "";
// fonction ici
function ditBonjourV2(personnes: Array<String>){
    for(let personne of personnes){
        result = result.concat(`Bonjour ${personne}<br>`);
    }
    console.log(result);
}
//ditBonjour(["Oliver", "Karl", "Simon"]);
tp5Container.innerHTML= result;
