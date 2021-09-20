const inputs = document.querySelectorAll(".inp-angle")
const isTriangleBtn = document.querySelector("#is-triangle-btn")
const outputEl = document.querySelector("#output")

function calcSumOfAngles(angle1,angle2,angle3) {
    return angle1+angle2+angle3;
}

function checkInputs()
{
   var msg = false;
    if((!inputs[0].value && inputs[0].value<0))
        return msg = "Enter the Angle 1"
    else if((!inputs[1].value && inputs[1].value<0))
        return msg = "Enter the Angle 2"
    else if((!inputs[2].value && inputs[2].value<0))
        return msg = "Enter the Angle 3"
    else return msg;

}


function  isTraiangle() {
    var flag = checkInputs()
    if(flag)
    {
        output.innerHTML=flag;
    }
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
