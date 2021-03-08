const quizDB=[
    {   
        question: "Q1: Book is to Reading as Fork is to:",
        a: "drawing",
        b: "writing",
        c: "stirring",
        d: "eating",
        ans: "ans4"
    } ,
    {
    question: "Q2: What is the capital of Missouri",
        a: "Dhaka",
        b: "Albania",
        c: "Angola",
        d: "Jefferson City ",
        ans: "ans4"
    },
    {
    question: "Q3: HTML stands for",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these ",
        ans: "ans3"
    },{
    question: "Q4: The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body ",
        ans: "ans4"
    }
];
let questionCount=0;
let score=0;
const question = document.querySelector('.question');
const option1 = document.querySelector('#opt1');
const option2 = document.querySelector('#opt2');
const option3 = document.querySelector('#opt3');
const option4 = document.querySelector('#opt4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScroe = document.querySelector('#showScore');
 const loadQuestions =() =>{
     const questionList=quizDB[questionCount];
     question.innerText = questionList.question;
     option1.innerText=questionList.a;
     option2.innerText = questionList.b;
     option3.innerText = questionList.c;
     option4.innerText=questionList.d;
 }
 loadQuestions();
const deselectAll=()=>{
    answers.forEach((curAnsEement)=>curAnsEement.checked=false);
}
const getCheckAnswer=() =>{
    let answer;
    answers.forEach((curAnsEement)=>{
        if(curAnsEement.checked){
            answer=curAnsEement.id;
        }
    });
    return answer;
};
 submit.addEventListener('click',() =>{
     const checkedAnswer=getCheckAnswer();
     console.log(checkedAnswer);
     if (checkedAnswer == quizDB[questionCount].ans){
         score++;
     };
     questionCount++;
     deselectAll();
     if(questionCount<quizDB.length){
         loadQuestions();
     }
     else{
         showScroe.innerHTML=`
         <h3> Scored ${score}/${quizDB.length}</h3>
         <button class="btn" onclick="location.reload()">Play again</button>
         `;
         showScroe.classList.remove('scoreArea');
     }
 });