/**
 * les expressions lambda partie 1
 */
var tp6Container = document.getElementById("tp6_result");
var result = "";
// fonction ici
function ditBonjourV3(personnes: Array<String>){
    for(let personne of personnes.sort((p1,p2)=>{ return p1.length<p2.length?1:-1})){
        result = result.concat(`Bonjour ${personne}<br>`);
    }
    console.log(result);
}
//ditBonjourV3(["Oliver", "Karl", "Simon"]);
tp6Container.innerHTML= result;
