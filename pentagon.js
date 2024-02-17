function pentagonMainTitle(){
const pentagonText = document.getElementById('pentagon-width');
    const pentagonIn = pentagonText.value;
    const width = parseFloat(pentagonIn);
    console.log(width);

    const pentagonLength = document.getElementById('pentagon-length');
    const lengthText = pentagonLength.value;
    const length = parseFloat(lengthText);
    console.log(length);
    const pentagonAreaTotal = width - length;
    console.log(pentagonAreaTotal);
    const pentagonSpanAreaText = document.getElementById('pentagon-length-input-total');
    pentagonSpanAreaText.innerText = pentagonAreaTotal;

    const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.innerText = pentagonAreaTotal;
}