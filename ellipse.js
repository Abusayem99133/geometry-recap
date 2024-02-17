function ellipseMain(){
    const ellipseTitleText = document.getElementById('ellipse-base');
    const ellipseInputText = ellipseTitleText.value;
    const base = parseFloat(ellipseInputText);
    console.log(base);


    const ellipseContentTwo = document.getElementById('ellipse-height');
    const ellipseContent = ellipseContentTwo.value;
    const height = parseFloat(ellipseContent);
    console.log(height);
    const totalArea = base + height;
    console.log(totalArea);

    const spaceSpanArea = document.getElementById('ellipse-span-area');
    spaceSpanArea.innerText = totalArea;

    const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.innerText = totalArea;

}
