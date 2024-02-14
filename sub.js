
alfabateButtons.addEventListener('click', function(){
    sectionHidden('alfabate-section');
    sectionOpen('keyboard-section');
    gameTime();

})

loveButton.addEventListener('click', function(){
   const button = loveAndDolarButton('love-button');
    incrementDis.innerText = button;
})

function gameTime() {
    const randomLetter = randomNumber();
    gamedispay.innerHTML = randomLetter;
    secColorKyeButton(randomLetter);
}


