/**
 * dans le code TS, il suffit d'appeler l'objet declaré dans le js
 * autre chose dans ts config il faut autoriser le js: "allowJs": true
 */
var tp12Container = document.getElementById("tp12_result");
var result = "";
let party = new Party("Jonas Moore","Rose", new Date(1970,10,10));
result = `tester js dans ts: Bonjour ${party.firstName}`;
//tp12Container.innerHTML= result;