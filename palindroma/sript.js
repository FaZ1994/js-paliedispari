// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// funzione per capire se la parola inserita è palindroma
function checkPalindrome() {
    const string = document.getElementById("string").value;
    
  // converto la stringa di testo in un array che contenga le singole lettere
  const stringToArray = string.split("");

  // inverto le singole lettere e le salvo in nuovo array
  const reversestringToArray = stringToArray.reverse();

  // converto  l'array invertito in una stringa
  const reverseString = reversestringToArray.join("");

  if (string == reverseString) {
    alert(`la parola ${string} è palindorma`);
  } else {
    alert(`la parola ${string} non è palindorma`);
  }
}

document
  .querySelector("#button")
  .addEventListener("click", checkPalindrome);

