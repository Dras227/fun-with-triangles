const triAttributes = document.querySelectorAll(".tri-attributes")
const checkBtn = document.querySelector("#check-area")
const outDiv = document.querySelector("#output")
var msg = ""
checkBtn.addEventListener("click", ()=>{

    if(!(triAttributes[0] && triAttributes[0].value))
    {
        msg = "Please enter the base"
        outDiv.innerHTML = msg;
    }
     else if(triAttributes[0].value < 0)
    {
        msg = "Base length cannot be negative";
        outDiv.innerHTML = msg;

    }
    else if(!(triAttributes[1] && triAttributes[1].value))
    {
        msg = "Please enter the height"
        outDiv.innerHTML = msg;

    }
    else if(triAttributes[1].value<0)
    {
        msg = "Length of Height cannot be negative";
        outDiv.innerHTML = msg;

    }
   else {

    var area = 0.5 * (triAttributes[0].value * triAttributes[1].value);

    outDiv.innerHTML = area;
   }
})