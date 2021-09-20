const quizForm = document.querySelector('.quiz-form');
const submitAnsBtn = document.querySelector("#ans-submit");
const output = document.getElementById("output");
const correctAnswers = ["90deg","Right Angled"];



submitAnsBtn.addEventListener("click",function checkAns(){
    let score = 0;
    let index = 0;

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
    
    output.innerHTML  = score;
})