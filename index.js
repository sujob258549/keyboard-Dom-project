const alfabateSection = document.getElementById('alfabate-section');
const alfabateButtons = document.getElementById('alfabate-button');
const keyboardSection = document.getElementById('keyboard-section');
const incrementDis = document.getElementById('increment-dis');
const lifeDisplay = document.getElementById('life-display');
const loveButton = document.getElementById('love-button');
const gamedispay = document.getElementById('gamedispay');
const finalScore = document.getElementById('final-score');
const newfinalScore = document.getElementById('set-new-and-final-csore');






function sectionOpen(item) {
    const element = document.getElementById(item);
    element.classList.remove('hidden')
}
function sectionHidden(item) {
    const element = document.getElementById(item);
    element.classList.add('hidden')
}
// let number = 0;
// function loveAndDolarButton(item) {
//     const element = document.getElementById(item);
//     number += 1;
//     element.textContent = number;

// }

function randomNumber() {
    const alfabateLatter = 'abcdefghijklmnopqrstuvwxyx';
    const letSplite = alfabateLatter.split('');

    const randomnumber = Math.random() * 25;
    const rounNumber = Math.round(randomnumber);

    const alfaBate = letSplite[rounNumber];
    return alfaBate;
}


function secColorKyeButton(item) {
    const color = document.getElementById(item);
    color.classList.add('bg-yellow-700');
}
function removeBackgroundColor(item) {
    const removeColor = document.getElementById(item);
    removeColor.classList.remove('bg-yellow-700');
}


function keyboardButtons(event) {
    const eventKey = event.key;
    const display = gamedispay.innerText;
    const displayToLowercase = display.toLowerCase();

    if (eventKey === displayToLowercase) {
        const incrementNumber = incrementDis.innerText;
        const incrementIntager = parseInt(incrementNumber);
        // your score
        const newNumber = incrementIntager + 1
        incrementDis.innerText = newNumber;
        newfinalScore.innerText = newNumber;
        // relod ba contenue
        gameTime();
        // buttons bd remove
        removeBackgroundColor(displayToLowercase);

        const adEdit = document.getElementById('ad-edit');
        if (newNumber >= 0 && newNumber < 10) {
            adEdit.innerText = 'Your score is bad! please Improve';
        }
        else if (newNumber <= 10) {
            adEdit.innerText = 'Your score is good';
        }
    }


    else {
        const lifeButtons = lifeDisplay.innerText;
        const lifeButtonDisplay = parseInt(lifeButtons);
        // new life
        const newlife = lifeButtonDisplay - 1;
        lifeDisplay.innerText = newlife;
        if (newlife === 0) {

            sectionOpen('final-score');
            sectionHidden('alfabate-section');
            sectionHidden('keyboard-section');
            removeBackgroundColor(displayToLowercase);

        }
    }

}

document.addEventListener('keyup', keyboardButtons)



