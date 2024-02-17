// console.log('connected')
function rectangleMainLine(){
const rectangleTextArea = document.getElementById('input-area');
const rectangleInputArea = rectangleTextArea.value;
const input = parseFloat(rectangleInputArea);
console.log(input);
const rectangleHeightTextArea = document.getElementById('input-height-area');
const rectangleHeightTexInput = rectangleHeightTextArea.value;
const rectangleInputText = parseFloat(rectangleHeightTexInput);
console.log(rectangleInputText);
const totalArea = input + rectangleInputText;
console.log(totalArea)
const spanTextSpaceArea = document.getElementById('input-space-total');
spanTextSpaceArea.innerText = totalArea;
const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.innerText = totalArea;
    

}