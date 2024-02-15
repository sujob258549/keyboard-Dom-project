
alfabateButtons.addEventListener('click', function () {
    sectionHidden('alfabate-section');
    sectionOpen('keyboard-section');
    gameTime();

})

// loveButton.addEventListener('click', function(){
//    const button = loveAndDolarButton('love-button');
//     incrementDis.innerText = button;
// })

function gameTime() {
    const randomLetter = randomNumber();
    gamedispay.innerHTML = randomLetter;
    secColorKyeButton(randomLetter);
}

document.getElementById('final-score-button').addEventListener('click', function () {

    sectionOpen('keyboard-section');
    sectionHidden('final-score');
    gameTime();
    incrementDis.innerText = 0;
    lifeDisplay.innerText = 5;

  

    // const incrementNumbers = incrementDis.innerText;
    // const incrementIntagers = parseInt(incrementNumbers);
    // const newset = incrementIntagers + 0;
    // lifeDisplay.innerText = newset;
    // keyboardButtons();

})


