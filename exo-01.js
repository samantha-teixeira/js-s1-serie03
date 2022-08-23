var noteDC1 = prompt('Quelle est la note du DC1?');
var noteDC2 = prompt('Quelle est la note du DC2?');
var noteDS = prompt('Quelle est la note du DS?');
noteDC1 = parseInt(noteDC1);
noteDC2 = parseInt(noteDC2);
noteDS = parseInt(noteDS);
let note1 = document.querySelector(".DC1");
note1.innerHTML += `${noteDC1}`;
let note2 = document.querySelector(".DC2");
note2.innerHTML += `${noteDC2}`;
let note3 = document.querySelector(".DS");
note3.innerHTML += `${noteDS}`;


var somme = parseInt(noteDC1 + noteDC2 + noteDS);
var moyenne = somme/3;
var moyenne = moyenne.toFixed(2);
let moy = document.querySelector(".moyenne");
moy.innerHTML += `${moyenne}`;

console.log(somme);
console.log(moyenne);
