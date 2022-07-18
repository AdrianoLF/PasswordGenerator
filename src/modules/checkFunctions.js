//Number of characters must be an integer number
function checkIfInteger(v){
    const inputValue = document.getElementById('number-of-chars')
    let value = inputValue.value
    if(value != Math.round(value)){
        alert("A quantidade de caracteres deve ser um número inteiro")
        return false
    }  
    return true
}

//Number of characters must be between 1 and 30
function checkNumberOfChar() {
    //Catching HTML elements
    const inputValue = document.getElementById('number-of-chars')
    const v = inputValue.value

    //Checking if it's an integer number
    if(checkIfInteger(v) !== true) return inputValue.value = '';

    if (v > 30 || v <= 0) {//checking if "V" is within the required values
        alert('Quantidade de caracteres deve ser maior que 0 e menor que 30')
        inputValue.value = 1
        return false
    }
    return true//If verification goes well, return true
}




export { checkNumberOfChar }