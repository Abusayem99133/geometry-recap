function parallelogramMain(){
    const parallMainInput = document.getElementById('para-height');
    const paraMainInputText = parallMainInput.value;
    const count = parseFloat(paraMainInputText);
    console.log(count);

    const  parallelogramMainSite = document.getElementById('parasoling-base');
    const parallelogramTextInput = parallelogramMainSite.value;
    const countTwo = parseFloat(parallelogramTextInput);
    console.log(countTwo)
    const totalAmount = count * countTwo;
    console.log(totalAmount);

    const spaceArea = document.getElementById('para-site');
    spaceArea.innerText = totalAmount;

    const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.innerText = totalAmount;

}