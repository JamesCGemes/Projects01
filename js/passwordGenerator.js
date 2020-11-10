const charAmountRange = document.getElementById('charAmountRange')
const charAmountNum = document.getElementById('charAmountNum')
const form = document.getElementById('passwordGenerator')
const includeUppercase = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbersElement')
const includeSymbolsElement = document.getElementById('includeSymbolsElement')
const lowerCaseCharCodes = lowToHigh(97, 122)
const upperCaseCharCodes = lowToHigh(65, 90)
const numberCharCodes = lowToHigh(48, 57)
const symbolsCharCodes = lowToHigh(33, 47).concat(lowToHigh(58, 64)).concat(lowToHigh(91, 96)).concat(lowToHigh(123, 126))


charAmountNum.addEventListener('input', syncCharAmount)
charAmountRange.addEventListener('input', syncCharAmount)

form.addEventListener('submit', e =>{
    e.preventDefault()
    const charAmount = charAmountNum.value
    const includeUppercaseForm = includeUppercase.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(charAmount, includeUppercaseForm, includeNumbers, includeSymbols)
})

function generatepassword(charAmount, includeUppercaseForm, includeNumbers, includeSymbols){
    let charCodes = lowerCaseCharCodes
    // if (includeUppercaseForm) charCodes = charCodes.concat(upperCaseCharCodes) pickup here
}

function lowToHigh(low, high){
    const array = []
    for (let i = low; i <= high; i++){
    array.push(i)
    }
    return array;
}


function syncCharAmount(e){
    const value = e.target.value
    charAmountNum.value = value
    charAmountRange.value = value

}



