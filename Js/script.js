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

// // Exercice sur la liste de prénom
// let nom;
// let i = 1;

// while (nom !== null && nom !== "") {
//   nom = prompt("Donnez-moi le prénom N°" + i);

//   if (nom !== null && nom !== "") {
//     console.log("N°" + i + " " + nom);
//     i++;
//   } else {
//     console.log("Vous avez donné " + (i - 1) + " prénom(s).");
//   }
// }

// // // Exercice sur le chapitre opérateur
// let a = "100";
// let b = 100;
// let c = 1.0;
// let d = true;
// console.log("Ceci est une chaîne de caractères : " + a);
// b--;
// console.log(b);
// console.log(c + a);
// console.log(!d);

// // // Exercice qui donne la liste des nombre entier inférieur
// let num = parseInt(prompt("Donnez un numéro"));
// console.log(num);
// while (num > 0) {
//   num--;
//   console.log(num);
// }

// // // Exercice donnant la somme des notes et leur moyenne
// // let nombre;
// // let somme = 0;
// // let i = 0;
// // while (nombre != 0) {
// //   nombre = parseInt(prompt("Donnez un nombre"));
// //   somme += nombre;
// //   i++;
// // }
// // let moyenne = somme / (i - 1);
// // console.log("La somme vaut : " + somme);
// // console.log("La moyenne vaut : " + moyenne);

// // let nombre;
// // let somme = 0;
// // for (i = 0; nombre != 0; ++i) {
// //   nombre = parseInt(prompt("Donnez un nombre"));
// //   somme += nombre;
// // }
// // let moyenne = somme / (i-1);
// // console.log("La somme vaut : " + somme);
// // console.log("La moyenne vaut : " + moyenne);

// // // Exercice 4 les multiples
// let X = parseInt(prompt("Donnez la table que vous souhaitez"));
// let N = parseInt(
//   prompt("Donnez le nombre jusqu'à où vous voulez voir la multiplication")
// );
// let i = 0;
// console.log("La table de " + X + " jusqu'à " + N + " Sont :");
// while (N >= i) {
//   console.log(X + " * " + i + " = " + i * X);
//   i++;
// }

// let X = parseInt(prompt("Donnez la table que vous souhaitez"));
// let N = parseInt(
//   prompt("Donnez le nombre jusqu'à où vous voulez voir la multiplication")
// );
// console.log("La table de " + X + " jusqu'à " + N + " Sont :");
// for (i = 0; i <= N; i++) {
//   console.log(i + " * " + X + " = " + i * X);
// }

// let X = parseInt(prompt("Donnez la table que vous souhaitez"));
// let N = parseInt(
//   prompt("Donnez le nombre jusqu'à où vous voulez voir la multiplication")
// );
// console.log("La table de " + X + " jusqu'à " + N + " Sont :");
// for (N; N >= 0; N--) {
//   console.log(X + " * " + N + " = " + N * X);
// }

// // // Exercice 5 Nombre de voyelles
// let mot = prompt("Veuillez saisir un mot :");
// let nbrVoyelles = 0;
// for (let i = 0; i < mot.length; i++) {
//   caractere = mot.substring(i, i + 1);
//   if ("AEIOUYaeiouy".indexOf(caractere) !== -1) {
//     nbrVoyelles++;
//   }
// }
// console.log(`Le nombre de voyelles dans "${mot}" est : ${nbrVoyelles}`);

// // // Les fonctions - Exercices 1
// /**
//  *
//  * @param {number} x
//  * @param {number} y
//  */
// function produit(x, y) {
//   x = parseInt(prompt("Donnez votre premier nombre"));
//   y = parseInt(prompt("Donnez votre second nombre"));
//   resultat = x * y;
//   console.log("Le cube de " + x + " vaut : " + x * x * x);
//   console.log("Le poduit de " + x + " et " + y + " vaut : " + resultat);
// }

// function image() {
//   document.getElementById("Ancre").src = "papillon.jpg";
// }

// produit();

// // // Les fonctions - Exercices 2
// function strtok(str1, str2, n) {
//   str1 = prompt("Donnez votre liste de mot avec un séparateur entre chaque");
//   str2 = prompt("Veuillez inqiduer votre séparateur");
//   n = parseInt(prompt("donnez un index, je vous donnerai le mot correspondant"))-1;
//   const mot = str1.split(str2);

//   console.log(str1);
//   console.log(mot[n]);
// }

// // // Les tableaux - Exercices 1
// function tableau() {
//   let TabLength = parseInt(prompt("Donnez la longueur du tableau"));
//   let tab1 = new Array(TabLength);
//   for (let i = 0; i < TabLength; i++) {
//     tab1[i] = [prompt("Donnez la valeur N°" + (i + 1))];
//     console.log(tab1[i]);
//   }
// }

// let TabLength = parseInt(prompt("Donnez la longueur du tableau"));
// tableau2(TabLength);

// function tableau2(TabLength) {
//   let tab1 = new Array(TabLength);
//   for (let i = 0; i < TabLength; i++) {
//     tab1[i] = [prompt("Donnez la valeur N°" + (i + 1))];
//     console.log(tab1[i]);
//   }
//   console.log(tab1);

// }

// let NbrP = parseInt(prompt("Votre nombre de copie"));

// if (NbrP <= 10) {
//   console.log(
//     "Pour imprimer " + NbrP + " copie, ça vous coutera : " + NbrP * 0.1
//   );
// } else if (NbrP > 20) {
//   console.log(
//     "Pour imprimer " + NbrP + " copie, ça vous coutera : " + NbrP * 0.08
//   );
// } else {
//   console.log(
//     "Pour imprimer " + NbrP + " copie, ça vous coutera : " + NbrP * 0.09
//   );
// }

// let nb = parseInt(prompt("Nombre pour faire la somme"));
// let somme = 0;
// let i;
// for (let i = 0; i <= nb; i++) {
//   somme += i;
//   console.log("N°" + i);
//   console.log("La Somme est : " + somme);
// }
// console.log("La somme des entiers jusqu'à : " + nb + " est : " + somme);

// let nb = parseInt(prompt("Nombre pour faire la somme"));
// console.log("La somme Vaut : " + (nb * (nb + 1)) / 2);

// let table = [];
// let nombre;
// let somme = 0;
// for (i = 0; nombre != 0; i++) {
//   nombre = parseInt(window.prompt("Entrez votre valeur"));
//   somme += nombre;
//   table[i] = nombre;
// }
// let moyenne = somme / (i - 1);
// console.log("Il y a eu : " + (i - 1) + " valeurs");
// console.log("La moyenne vaut : " + moyenne);
// console.log("La somme vaut : " + somme);
// table.pop();
// console.log(table);

// let nb1 = parseInt(prompt("nombre 1"));
// let nb2 = parseInt(prompt("nombre 1"));
// function div(nb1, nb2) {
//   alert("Le modulo de " + nb1 + " et de " + nb2 + " est : " + (nb1 % nb2));
// }
// div(nb1, nb2);

// let nom = "Pierre";
// let prenom = "Paul";
// let valeur = `  ${nom}
// ${prenom}`;
// console.log(`Bonjour ${valeur}`);

