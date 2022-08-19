function updateCaseNumber(isIncrease) {
    const caseNumberFiled = document.getElementById('case-number-filed');
    const caseNumberString = caseNumberFiled.value;
    const prevousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = prevousCaseNumber + 1;
    }
    else{
        newCaseNumber = prevousCaseNumber - 1;
    }
    caseNumberFiled.value= newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const totalCasePrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById('case-total');
  caseTotalElement.innerText =  totalCasePrice;

}

document.getElementById('btn-case-plus').addEventListener('click', function () {
  const newCaseNumber =  updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal()

})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
   
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal()


})