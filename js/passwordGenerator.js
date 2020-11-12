//
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

//Characters for the password, uses character codes
const lowerCaseCharCodes = lowToHigh(97, 122)
const upperCaseCharCodes = lowToHigh(65, 90)
const numberCharCodes = lowToHigh(48, 57)
const symbolsCharCodes = lowToHigh(33, 47).concat(lowToHigh(58, 64)).concat(lowToHigh(91, 96)).concat(lowToHigh(123, 126))

//Event listeners for the number of letters inputs, slider and number box.
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e =>{
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatepassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatepassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
    let charCodes = lowerCaseCharCodes
    if (includeUppercase) charCodes = charCodes.concat(upperCaseCharCodes)
    if (includeSymbols) charCodes = charCodes.concat(symbolsCharCodes)
    if(includeNumbers) charCodes = charCodes.concat(numberCharCodes)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++){
       const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function lowToHigh(low, high){
    const array = []
    for (let i = low; i <= high; i++){
    array.push(i)
    }
    return array;
}

//This syncs the slider bar and number input together so that they both change together.
function syncCharacterAmount(e){
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value

}



