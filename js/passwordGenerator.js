const charAmountRange = document.getElementById('charAmountRange')
const charAmountNum = document.getElementById('charAmountNum')


charAmountNum.addEventListener('input', syncCharAmount)
charAmountRange.addEventListener('input', syncCharAmount)


function syncCharAmount(e){
    const value = e.target.value
    charAmountNum.value = value
    charAmountRange.value = value

}

