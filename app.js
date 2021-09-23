const inputs = document.querySelectorAll(".inp-angle")
const isTriangleBtn = document.querySelector("#is-triangle-btn")
var outputEl = document.querySelector(".output")
outputEl.style.display = "none";
function calcSumOfAngles(angle1,angle2,angle3) {
    return angle1+angle2+angle3;
}



function  isTraiangle() {
  outputEl.style.display = "block";
     if((!inputs[0].value))
        outputEl.innerHTML = "Enter the Angle 1";
    else if(inputs[0].value<0)
        outputEl.innerHTML = "Angle 1 cannot be -ve";
    else if((!inputs[1].value))
        outputEl.innerHTML = "Enter the Angle 2";
    else if(inputs[1].value<0)
        outputEl.innerHTML = "Angle 2 cannot be -ve";
    else if((!inputs[2].value))
        outputEl.innerHTML = "Enter the Angle 2";
    else if(inputs[2].value<0)
        outputEl.innerHTML = "Angle 2 cannot be -ve";
    
    else
    {
        var sum = calcSumOfAngles(parseInt(inputs[0].value),parseInt(inputs[2].value),parseInt(inputs[2].value));
    outputEl.innerHTML = "";
    var op = "";
    
    if(sum === 180)
        op = "These 3 angles forms a Triangle";
    else
        op = "These 3 angles does not form a triangle";

    outputEl.innerHTML = op;
    }

}

isTriangleBtn.addEventListener("click",isTraiangle);
