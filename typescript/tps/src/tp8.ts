/**
 * les var args
 */
var tp8Container = document.getElementById("tp8_result");
var result = "";
function testerVarargs(...args){
        for(let arg of args){
            result += `passed arg is : ${arg} <br>`;
        }

}
//testerVarargs(1,2,"Hello", "Yaz", false, undefined);
tp8Container.innerHTML= result;