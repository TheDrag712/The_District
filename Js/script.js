// // // Exercice pour demander le nom et prénom et convertir des degres celsius en fahrenheit
// let prenom = prompt("votre prénom?");
// console.log(prenom);
// let nom = prompt("Votre nom?");
// console.log(nom);
// alert("Bonjour " + prenom + " " + nom);
// let c = prompt(
//   prenom + " donnez moi une température en celsius, s'il vous plait"
// );
// let f = (c * 9) / 5 + 32;
// console.log(f);
// alert(prenom + ", " + c + "°C, en Fahrenheit, cela fait " + f + "°");
// let num1 = prompt("Donnez le nombre 1")
// let num2 = prompt("Donnez le nombre 2")
// let somme = parseInt(num1) + parseInt(num2)
// console.log(somme)

// // // Exercie sur la parité d'un nombre
// let num1 = prompt("Donnez moi un nombre je vous direz s'il est pair ou impair");

// if (num1 == 0) {
//   console.log("pair");
//   alert("Votre nombre est pair");
// }
// if (num1 % 2 == 0) {
//   console.log("pair");
//   alert("Votre nombre est pair");
// } else {
//   console.log("impair");
//   alert("Votre nombre est impair");
// }

// // // Exercie où l'on sait si la personne et mineur ou majeur en lui demander sa date de naissance
// const dateActuelle = new Date();
// const anneeActuelle = dateActuelle.getFullYear();
// let Ybirthday = prompt(
//   "Donnez moi votre année de naissance, je vous donnerai votre âge, et je vous dirais si vous êtes majeur ou pas"
// );
// let age = anneeActuelle - parseInt(Ybirthday);
// console.log(age);
// if (age < 18) {
//   alert("Vous avez " + age + "ans, vous êtes donc mineur");
// } else {
//   alert("Vous avez " + age + "ans, vous êtes donc majeur");
// }

// // // expresion donner par Bruno
// let num1 = parseInt(prompt("Numero 1"));
// let num2 = parseInt(prompt("Numero 2"));
// const somme = (a, b) => a + b;
// console.log(somme(num1, num2));

// // // Exercice pour faire une calculatrice
// let num1 = parseInt(prompt("Numero 1"));
// let num2 = parseInt(prompt("Numero 2"));
// let signe = prompt("Votre signe (+,-,*,/)");
// switch (signe) {
//   case "+":
//     console.log(num1 + " " + signe + " " + num2 + " = " + (num1 + num2));
//     alert(num1 + " " + signe + " " + num2 + " = " + (num1 + num2));
//     break;
//   case "-":
//     console.log(num1 + " " + signe + " " + num2 + " = " + (num1 - num2));
//     alert(num1 + " " + signe + " " + num2 + " = " + (num1 - num2));
//     break;
//   case "*":
//     console.log(num1 + " " + signe + " " + num2 + " = " + num1 * num2);
//     alert(num1 + " " + signe + " " + num2 + " = " + num1 * num2);
//     break;
//   case "/":
//     if (num2 == 0) {
//       console.log("La division est imposible");
//       alert("La division est imposible");
//     } else console.log(num1 + " " + signe + " " + num2 + " = " + num1 / num2);
//     alert(num1 + " " + signe + " " + num2 + " = " + num1 / num2);
//     break;
//   default:
//     console.log(
//       "Votre signe n'est pas reconnue, voici les signe accepté : +,-,*,/"
//     );
// }

let prenom = " ";
for (i = 1; (prenom = ""); i++) {
  let prenom = prompt("Donnez moi le prenom N°" + i);
  console.log("N°" + i + " " + prenom);
}
console.log("Vous avez donnez " + i + " prénoms");

// Test pour voir si c'est réparer
