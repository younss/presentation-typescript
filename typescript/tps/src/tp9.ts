/**
 * les variables générées dynamiquement
 */
var tp9Container = document.getElementById("tp9_result");
var result = "";
const tablePrefix = "tlb_";
var dataModel = {
    [ tablePrefix + "PERSONNE"] : "{id:number, prenom:string, , nom:string}",
    [ tablePrefix + "SCORE_DE_CREDIT"] : "{score:number, scoreDate: date, personne:number}"
}
//result += JSON.stringify(dataModel);

tp9Container.innerHTML= result;