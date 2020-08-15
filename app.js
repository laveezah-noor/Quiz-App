var count;
var startBtn = document.getElementById('start-btn');
var front = document.getElementById('front');
var card = document.getElementById('card');
var progress = document.getElementById('progress-bar');
var num = document.getElementById('number');
var question = document.getElementById('question');
var options = document.getElementById('answers');

startBtn.addEventListener('click',start);
function start(){
    var input = document.getElementById("name");
    if (input !== null && input.value === ""){
        alert("Please Enter Your Name")
    } 
    else {
        console.log('Begin')
        front.style.display = "none";
        card.style.display = "block";
        count = 0;
        next()
    }
}
function next() {
    if (count-1 == questions.length-1) {
        var q = document.getElementsByClassName("quesans")[0];
        q.style.display = 'none';
        var result_div = document.getElementById('result-div');
        result_div.style.display = 'block';
        var result = document.getElementById('result');
        result.innerHTML = score;
    } else{
    count++;
    show(count);
    console.log(count)
    }

}
function show(no) {
   question.innerHTML = questions[no-1].question;
   num.innerHTML = questions[no-1].id;
   options.innerHTML = `<li class="list-group-item option">
                             ${questions[no-1].options[0]} </li>
                        <li class="list-group-item option">
                             ${questions[no-1].options[1]} </li>
                        <li class="list-group-item option">
                             ${questions[no-1].options[2]} </li>`
    active()
    progress.style.width = count*20 + "%"
}
var selected = "";
function active() {
    let option = document.querySelectorAll("li.option")

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function(){
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add("active")
            selected = option[i]
            console.log(selected.innerHTML);
            check(count)
        }
    }
}
var score = 0;
var value = 0;
function check(e) {
    console.log(selected.innerText,questions[e-1].answer)
    if (selected.innerText == questions[e-1].answer) {
        console.log("Correct");
        score += 10;
        console.log(score);
    } else{
        console.log('Wrong')
    }
}
var questions =[
    {
    id: 1,
    question: "Which one is correct team name in NBA?",
    options: [
    "New York Bulls",
    "Los Angeles Kings",
    "Huston Rocket"
    ],
    answer: "Huston Rocket"
    },
    {
    id: 2,
    question: "5 + 7 = ?",
    options: [
    "10",
    "11",
    "12"
    ],
    answer: "12"
    },
    {
    id: 3,
    question: "12 - 8 = ?",
    options: [
    "1",
    "2",
    "4"
    ],
    answer: "4"
    },
    {
    id: 4,
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyper links and Markup Language"
    ],
    answer: "Hyper Text Markup Language"
    },
    {
    id: 5,
    question: "Name the seventh planet from the sun?",
    options:[
        "Uranus",
        "Pluto",
        "Jupiter"
    ],
    answer: "Uranus"
    }
]
