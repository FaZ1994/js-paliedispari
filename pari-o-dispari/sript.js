/* const even = document.getElementById("even");
const odd = document.getElementById("odd");
*/

// funzione riutilizzabile che genere numeri random tra i valori impostati
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const btnOdd =document.querySelector('#btnOdd');
const btnEven = document.querySelector('#btnEven');

btnOdd.addEventListener("click", ()=>{
  let odd;
  for(const )
} )


const btnNum = document.querySelector('#btnNum');       
const radioButtons = document.querySelectorAll('input[name="chooseNum"]');
btnNum.addEventListener("click", () => {
            let userNum;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    userNum = radioButton.value;
                    break;
                }
            }
            // show the output:
            output.innerText = userNum ? `Hai scelto ${userNum}` : `non è stato selezionato nessun numero`;
        });













/*

function getUserNumb() {
  let radios = document.getElementsByTagName("input");
  let userNum;
  for (let n = 0; n < radios.length; n++) {
    if (radios[n].checked) {
      userNum = radios[n].value;
    }

    console.log("userNum is: " + userNum);
  }
}

function winOrLose() {
  pcNumb = getRandomInt(1, 5);
  //alert("il numero del computer è: " + pcNumb);
  let sum = userNum + pcNumb;
}


*/
