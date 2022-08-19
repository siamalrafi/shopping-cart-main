function updatePhoneNumber(isIncrease) {
    const phoneNumberFiled = document.getElementById('phone-number-filed');
    const phoneNumberString = phoneNumberFiled.value;
    const prevousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = prevousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = prevousPhoneNumber - 1;
    }

    phoneNumberFiled.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrce = newPhoneNumber * 1219;
    const phoneNumberElement = document.getElementById('phone-total');
    phoneNumberElement.innerText = phoneTotalPrce;

}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal()


})



document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal()


})