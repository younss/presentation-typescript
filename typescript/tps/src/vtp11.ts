/**
 * Tester les decorateurs
 * Decorateur de Logins
 */
var tp11Container = document.getElementById("tp11_result");
var result = "";

function logger(log:string) {
   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        result+= `LOG-- ${new Date()}: ${log} `;
    }
}
class Main {
    
    constructor(){}
   @logger(" Main.main called ")
    static main(args?:Array<any>):void {
        result+= '<br>Bonjour tout le mode<br>';
    }
}
Main.main();




//tp11Container.innerHTML= result;