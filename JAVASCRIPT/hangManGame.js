const wordsWithClues = [
    { word: 'informatica', clue: 'Estudio de la información y computación.' },
    { word: 'informacion', clue: 'Datos organizados que tienen significado.' },
    { word: 'computadora', clue: 'Máquina que procesa información.' },
    { word: 'datos', clue: 'Hechos o cifras recopilados para referencia.' },
    { word: 'hardware', clue: 'Componentes físicos de una computadora.' },
    { word: 'software', clue: 'Programas y sistemas operativos.' }
];

let selectedWord;
let selectedClue; // Variable for the clue
let guessedLetters = [];
let wrongGuesses = 0;

function initializeGame() {
    const randomIndex = Math.floor(Math.random() * wordsWithClues.length);
    selectedWord = wordsWithClues[randomIndex].word;
    selectedClue = wordsWithClues[randomIndex].clue; // Get the clue
    guessedLetters = [];
    wrongGuesses = 0;
    updateWordDisplay();
    updateHangmanImage();
    updateMessage('');
    updateClueDisplay(); // Show the clue
    lettersContainer.innerHTML = '';

    for (let i = 65; i <= 90; i++) {
        const letterButton = document.createElement('button');
        letterButton.innerText = String.fromCharCode(i);
        letterButton.addEventListener('click', () => guessLetter(letterButton.innerText.toLowerCase()));
        lettersContainer.appendChild(letterButton);
    }
}

function updateClueDisplay() {
    const clueContainer = document.getElementById('clue-container');
    clueContainer.innerText = `Pista: ${selectedClue}`; // Display the clue
}




const maxWrongGuesses = 6;

const wordContainer = document.getElementById('word-container');
const hangmanImage = document.getElementById('hangman');
const lettersContainer = document.getElementById('letters-container');
const messageContainer = document.getElementById('message');
const resetButton = document.getElementById('reset-button');



function updateWordDisplay() {
    wordContainer.innerHTML = selectedWord
        .split('')
        .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
        .join(' ');
}

function updateHangmanImage() {
    hangmanImage.src = `IMAGES/hangman${wrongGuesses}.PNG`;
}

function guessLetter(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!selectedWord.includes(letter)) {
            wrongGuesses++;
        }
        updateWordDisplay();
        updateHangmanImage();
        checkGameStatus();
    }
}

function checkGameStatus() {
    if (wrongGuesses >= maxWrongGuesses) {
        updateMessage(`JUEGO PERDIDO! La palabra era: ${selectedWord}`);
        disableLetterButtons();
    } else if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
        updateMessage('FELICIDADES! Adivinaste la palabra!');
        disableLetterButtons();
    }
}

function disableLetterButtons() {
    const buttons = lettersContainer.getElementsByTagName('button');
    for (const button of buttons) {
        button.disabled = true;
    }
}

function updateMessage(message) {
    messageContainer.innerText = message;
}

resetButton.addEventListener('click', initializeGame);

initializeGame();
