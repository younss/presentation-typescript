/**
 * de JavaScript à TypeScript
 */
var tp1Container = document.getElementById("tp1_result");
var result = "";
function ditBonjour (personnes){
    for(var i = 0; i<personnes.length;i++){
        result = result.concat(' Bonjour ' + personnes.sort()[i] + '<br>');
    }
    console.log(result);
}
//ditBonjour();
tp1Container.innerHTML= result;

