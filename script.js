let questions = [
    {
        "question": "Wer hat HTML gefunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet das HTML Tag a?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "Mit &ltiframe&gt",
        "answer_2": "Mit &ltimg&gt",
        "answer_3": "Mit &ltp&gt",
        "answer_4": "Mit &lth1&gt",
        "right_answer": 1
    },
    {
        "question": "Wie stellt man Text am BESTEN fett dar?",
        "answer_1": "&ltstrong&gt",
        "answer_2": "&ltitalic&gt",
        "answer_3": "&ltp&gt",
        "answer_4": "&ltdiv&gt",
        "right_answer": 1
    },
    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer_1": "variable",
        "answer_2": "define",
        "answer_3": "function",
        "answer_4": "let",
        "right_answer": 4
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById("all_questions").innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        //TODO: go to END PAGE
    }
    else {
        let question = questions[currentQuestion];

        document.getElementById("question-text").innerHTML = question["question"];
        document.getElementById("question-nummer").innerHTML = currentQuestion + 1;

        document.getElementById("answer1").innerHTML = question["answer_1"];
        document.getElementById("answer2").innerHTML = question["answer_2"];
        document.getElementById("answer3").innerHTML = question["answer_3"];
        document.getElementById("answer4").innerHTML = question["answer_4"];
    }

}

let numberOfClicks = 0;

function answer(selection) {
    // let question=questions[currentQuestion];

    //selection.slice(-1)

    numberOfClicks++;

    let rightAnswerId = "answer" + questions[currentQuestion]["right_answer"];

    if (selection.at(-1) == questions[currentQuestion]["right_answer"]
        && numberOfClicks == 1) {
        console.log("correct");
        document.getElementById(selection).classList.add("bg-success");
    }
    else if (selection.at(-1) != questions[currentQuestion]["right_answer"]
        && numberOfClicks == 1) {
        console.log("wrong");
        document.getElementById(selection).classList.add("bg-danger");
        document.getElementById(rightAnswerId).classList.add("bg-success");
    }
    document.getElementById("next-button").disabled = false;

}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("next-button").disabled = true;
    resetAnswerButtons();
    showQuestion();
    numberOfClicks = 0;
}

function resetAnswerButtons() {
    document.getElementById("answer1").classList.remove("bg-danger");
    document.getElementById("answer2").classList.remove("bg-danger");
    document.getElementById("answer3").classList.remove("bg-danger");
    document.getElementById("answer4").classList.remove("bg-danger");
    document.getElementById("answer1").classList.remove("bg-success");
    document.getElementById("answer2").classList.remove("bg-success");
    document.getElementById("answer3").classList.remove("bg-success");
    document.getElementById("answer4").classList.remove("bg-success");
}