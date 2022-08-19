/* function updatePhoneNumber(isIncrease) {
    const phoneNumberFiled = document.getElementById('phone-number-filed');
    const phoneNumberString = phoneNumberFiled.value;
    const prevousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = prevousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = prevousPhoneNumber - 1;
    }

    phoneNumberFiled.value = newPhoneNumber;
     
}
 */

function getTextElementValueById(elementId) {
    const phoneNumberElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneNumberElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;

}


function setElementValueTotal(elementId, value){
    const currentSubTotalElement = document.getElementById(elementId);
    currentSubTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

setElementValueTotal('sub-total')

    const taxAmount = currentCaseTotal * 0.1;
    setElementValueTotal('tax-amount', taxAmount)

}