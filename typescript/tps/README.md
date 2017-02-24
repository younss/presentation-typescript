# TypeScript ou JavaScript autrement
## Général
Installez typescript et lite-server
```
npm i typings typescript lite-server -g
```

Pour compiler TS en JS  
```
tsc –w
```
pour créer un fichier de config *tsconfig.json*
```
tsc -init
```
pour lancer lite-server
```
lite-server
```
une page http se lance 
Renommez  tp1.js en tp1.ts , 
Appelez la fonction sans paramètres et analyser
executez le code 

```
node tp1.js
```
Testez la fonction avec une chaîne de caractère, avec un tableau

```
ditBonjour("a");
ditBonjour(["a"]);
```
Spécifiez le type du paramètre de la fonction ditBonjour()
Testez la fonction avec un tableau d’entiers naturels, une chaîne de caractère…

```
function ditBonjour (personnes: string[]){
    ...
}
ditBonjour([1]);
```
##TP2
Dans tp2.ts, écrivez une fonction imprimerInformationsPersonnelles() qui affiche le nom, prénom et pays de résidence.
Testez la fonction
Passer dans la fonction que le nom et le prénom, pas de pays
Analysez
Attribuez au paramètre pays la valeur CANADA
Testez et analysez
```
var result = "";
// fonction ici
function imprimerInformationsPersonnelles(prenom, nom, pays="CANADA"){
    result = "Informations Personnelles: <br> prenom: " + prenom + "<br> nom: " + nom + "<br> pays: " + pays;
    console.log(result);
}

imprimerInformationsPersonnelles("Bob", "Marley");
```
##TP3
Dans tp3.ts, écrivez une fonction imprimerInformationsPersonnellesV2() même que imprimerInformationsPersonnellesV2().
utilisez une Template de chaîne de caractères
Tester et analyser
```
function imprimerInformationsPersonnellesV3(prenom, nom, pays="CANADA"){
    result = `Informations Personnelles <br> prenom: ${prenom}<br> nom: ${nom} <br> pays: ${pays}`;
    console.log(result);
}

imprimerInformationsPersonnellesV3("Oliver", "James","CANADA");
```
##TP4
Dans tp4.ts, essayez d’utiliser var et let respectivement, pour mettre à jour le rendu de la section TP4
Question: Est-ce-que ce code est fonctionnel?
```
if(true){
        var result_VAR_LET = "Test Var";
    }
    console.log(result_VAR_LET);
```
essayer avec let
Qu'est ce que vous constatez

##TP5
Dans tp5.ts, récrivez la fonction de tp1.ts en utilisant la boucle for de TS et les template String.
```
for(let x of group)
```
##TP6
Exemple de lambda
```
function ditBonjourV3(personnes: Array<String>){
    for(let personne of personnes.sort((p1,p2)=>{ return p1.length<p2.length?1:-1})){
        result = result.concat(`Bonjour ${personne}<br>`);
    }
    console.log(result);
}
ditBonjourV3(["Oliver", "Karl", "Simon"]);

```

##TP7
Exemple lambda avancer: 
tester le code dans tp7
```
//reactivez cette ligne
new Counter(counterElm,submitElm);

```
Dans la page html cliquez sur submit: Est-ce-que c'est fonctionnel?
voir les deux solutions en commentaire sans et en utilisant les expressions lambda
Conclusion: Lambda permet l'accès au objets du scope parent.

##TP8
voir tp8.ts
=====================================================
####  le Debug dans VSC                          
=====================================================
- activer le debug sur tp1.js
- À l'aide de VSC lancer le debug

> 
> ajouter la configuration de sourceMap et specifé le outFile 
```
{
...
        "sourceMap": true,
        "rootDir": "src",
        "outFile": "dist/main.js"
...
}
```
> dans le fichier launch.json ajouter vos config
exemples 
```
 {
            "type": "node",
            "request": "launch",
            "name": "TP1",
            "program": "${workspaceRoot}/src/tp1.ts",
            "cwd": "${workspaceRoot}",
            "sourceMaps": true,
             "outFiles": [ "${workspaceRoot}/dist/main.js" ]
             
        }
```
* fait attention au workspace, sous dossiers...
