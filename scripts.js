// triangle area 


function clickMainTriangle(){
    const triangleBaseArea = document.getElementById('triangle-base');
    const triangleTextArea = triangleBaseArea.value;
    const base = parseFloat(triangleTextArea);
    // base.innerText;
    console.log(base);
    const triangleHeightArea = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightArea.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);
    const area = 0.5 * base * height;
    console.log(area);
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

    const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.innerText = area;
    
}
// console.log('clicked');


