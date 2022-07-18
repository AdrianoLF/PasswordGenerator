import './assets/css/style.css'
import { checkNumberOfChar } from './modules/checkFunctions'

const btn = document.getElementById('result-btn')
const result = document.querySelector('.result')

//TYPING
function typingPassword(value) {
    result.innerHTML = value
}

//Function that will return random numbers
const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

//!Function String.fromCharCode() returns an ASCII Table Value
//As you can check here: https://www.rapidtables.com/code/text/ascii-table.html
//Creating random fromCharCodeNumber for each type of character Class
const capitalLetterGenerator = () => String.fromCharCode(random(65, 91));
const smallLetterGenerator = () => String.fromCharCode(random(97, 123));
const numberGenerator = () => String.fromCharCode(random(48, 58));

//Catching a random symbol
const symbols = ',.;~^[]{}!@#$%*()_+=-';
const symbolGenerator = () => symbols[random(0, symbols.length)]


//Creating password
function passwordGenerator() {

    //If function checkNumberOfChar() returns a different value of 'true', return
    if (checkNumberOfChar() !== true) return result.innerHTML = ''

    //Catching how many numbers password will have
    let amount = document.getElementById('number-of-chars').value
    amount = Number(amount)

    const passwordArray = []

    //Catching checkbox values
    const capitalCheck = document.getElementById('add-capitalletter').checked
    const smallCheck = document.getElementById('add-smallletter').checked
    const numberCheck = document.getElementById('add-number').checked
    const symbolCheck = document.getElementById('add-symbol').checked

    for (let i = 0; i < amount; i++) {
        capitalCheck && passwordArray.push(capitalLetterGenerator())
        smallCheck && passwordArray.push(smallLetterGenerator())
        numberCheck && passwordArray.push(numberGenerator())
        symbolCheck && passwordArray.push(symbolGenerator())
    }

    //Transforming passwordArray in string and limiting this one with his length
    typingPassword(passwordArray.join('').slice(0, amount))

}

btn.addEventListener('click', passwordGenerator)