const alfabateSection = document.getElementById('alfabate-section');
const alfabateButtons = document.getElementById('alfabate-button');
const keyboardSection = document.getElementById('keyboard-section');
const incrementDis = document.getElementById('increment-dis');
const loveButton = document.getElementById('love-button');
const gamedispay  = document.getElementById('gamedispay');




function sectionOpen(item) {
    const element = document.getElementById(item);
    element.classList.remove('hidden')
}
function sectionHidden(item) {
    const element = document.getElementById(item);
    element.classList.add('hidden')
}
let number = 0;
function loveAndDolarButton(item) {
    const element = document.getElementById(item);
    number += 1;
    element.textContent = number;

}

function randomNumber() {
    const alfabateLatter = 'abcdefghijklmnopqrstuvwxyx';
    const letSplite = alfabateLatter.split('');

    const randomnumber = Math.random() * 25;
    const rounNumber = Math.round(randomnumber);

    const alfaBate = letSplite[rounNumber];
    return alfaBate;
}


function secColorKyeButton(item){
    const color = document.getElementById(item);
    color.classList.add('bg-yellow-700');
}




