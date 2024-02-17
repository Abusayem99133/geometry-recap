function rhombusMain(){
    const rhombusMainTextSite = document.getElementById('rhombus-title-1');
    const rhombusMainInputSite = rhombusMainTextSite.value;
    const decimalRhombus = parseFloat(rhombusMainInputSite);
    console.log(decimalRhombus);


    const nulizaMainTime = document.getElementById('rhombus-title-2');
    const rhombusInput = nulizaMainTime.value;
    const decimalInput = parseFloat(rhombusInput);
    console.log(decimalInput);
    const totalBudget = decimalRhombus / decimalInput;
    console.log(totalBudget);

    const totalDisplay = document.getElementById('rhombus-total');
    totalDisplay.innerText = totalBudget;
    // console.log(totalItem)

    const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.innerText = totalBudget;
}