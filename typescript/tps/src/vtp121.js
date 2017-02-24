/* Utiliser du code JS dans du code TS */
/* Premierement il faut ajouter de la doc sur la méthodes js comme l'exemple suivant, en ajoutand l annotation de constructeur 
    les anotations de parametres avec leurs type le nom de props et la description
    Pour la suite voir vtp122.ts
*/
/**
 * Create a new Party Object
 * @constructor
 * @param {string} firstName first name
 * @param {string} lastName last name
 * @param {Date} dateOfBirt date of birth
 * 
 */

function Party(firstName, lastName, dateOfBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
}

/* code purement js */
var policyHolder = new Party("yaz","boy", new Date(1983,7,30));
