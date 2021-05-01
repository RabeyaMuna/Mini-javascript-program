const quizDB=[
    {   
        question: "Q: Book is to Reading as Fork is to:",
        a: "drawing",
        b: "writing",
        c: "stirring",
        d: "eating",
        ans: "ans4"
    } ,
    {
    question: "Q: What is the capital of Missouri",
        a: "Dhaka",
        b: "Albania",
        c: "Angola",
        d: "Jefferson City ",
        ans: "ans4"
    },
    {
    question: "Q: HTML stands for",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these ",
        ans: "ans3"
    },{
    question: "Q: The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body ",
        ans: "ans4"
    },{
    question: "Q: Entomology is the science that studies",
        a: "Behavior of human beings",
        b: "Insects",
        c: "The origin and history of technical and scientific terms",
        d: "The formation of rocks ",
        ans: "ans2"
    }, {
        question: "Q: Eritrea, which became the 182nd member of the UN in 1993, is in the continent of -",
        a: "Asia",
        b: "Africa",
        c: "Europe",
        d: "Australia ",
        ans: "ans2"
},{

        question: "Q: Garampani sanctuary is located at -",
            a: "Junagarh, Gujarat",
            b: "Diphu, Assam",
            c: "Kohima, Nagaland",
            d: "Gangtok, Sikkim",
            ans: "ans2"
    }, {
        question: "Q: For which of the following disciplines is Nobel Prize awarded?",
            a: "Physics and Chemistry",
            b: "Physiology or Medicine",
            c: "Literature, Peace and Economics",
            d: "All of the above",
            ans: "ans4"
}, {
        question: "Q: Grand Central Terminal, Park Avenue, New York is the world's -",
        a: "largest railway station",
        b: "highest railway station",
        c: "longest railway station",
        d: "None of the above",
        ans: "ans1"
},
];
 let questionCount=0;
 let total=5;
 var c=0;
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
     c = Math.floor(Math.random() * 9);
     const questionList=quizDB[c];
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
     if (checkedAnswer == quizDB[c].ans){
         score++;
     };
     questionCount++;
     deselectAll();
     if(questionCount<5){
         loadQuestions();
     }
     else{
         showScroe.innerHTML=`
         <h3> Scored ${score}/${total}</h3>
         <button class="btn" onclick="location.reload()">Play again</button>
         `;
         showScroe.classList.remove('scoreArea');
     }
 });
