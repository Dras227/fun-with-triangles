var sides = document.querySelectorAll(".sides");
var ansButton = document.querySelector("#ans-check");
var output = document.querySelector("#output");

ansButton.addEventListener("click", () => {
    if(!((sides[0].value && sides[1].value)))
    {
        output.innerHTML = "Please enter both the sides"
    }
    else if(((sides[0].value <1)||(sides[1].value<1)))
    {
        output.innerHTML = "Length of the sides cannot be negative"
        
    }
    else 
    {
        var ans = Math.sqrt(parseInt(sides[0].value*sides[0].value)+parseInt(sides[1].value*sides[1].value));

        output.innerHTML = ans;
    }
    
})