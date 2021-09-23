const quizForm = document.querySelector('.quiz-form');
const submitAnsBtn = document.querySelector("#ans-submit");
const output = document.querySelector(".output");
const correctAnswers = ["A geometric figure","1","Trigonometry","Polygon","Hypotenuse"];

output.style.display = "none";


submitAnsBtn.addEventListener("click",function checkAns(){
    let score = 0;
    let index = 0;
      output.style.display = "block";

    const formResults = new FormData(quizForm);
    

    for(let val of formResults.values())
    {
        console.log(val)
        if(val.toUpperCase() == correctAnswers[index].toUpperCase())
        {
            score= score+1;
        }
        index =index+1;
    }
    window.scrollTo(0,document.body.scrollHeight);
    output.innerHTML  = score;
})