const jsonData = {
    "module": {
        "number": 1,
        "name": "Level-one",
        "images": 10,
        "questions": 10,
        "revision": "HUH"
    },
    "questions": [{
            "number": 1,
            "question": "What is this?",
            "images": "images/sink.png",
            "answers": [
                "Fork",
                "Glass",
                "Blender",
                "Sink"
            ],
            "correct_answer": 3,
            "hint": "Rimer på flink"
        },
        {
            "number": 2,
            "question": "What is this?",
            "images": "images/knife.png",
            "answers": [
                "Bowl",
                "Dishwasher",
                "Knife",
                "Pokemon"
            ],
            "correct_answer": 2,
            "hint": "K er i ordet"
        },
        {
            "number": 3,
            "question": "What is this?",
            "images": "images/mug.png",
            "answers": [
                "A Mug",
                "Boiler",
                "Bread Knife",
                "Spoon"
            ],
            "correct_answer": 0,
            "hint": "2 ord"
        },
        {
            "number": 4,
            "question": "What is this??",
            "images": "images/whisk.png",
            "answers": [
                "Coffee maker",
                "Waffle Iron",
                "Whisk",
                "Frying Pan"
            ],
            "correct_answer": 2,
            "hint": "W er i ordet"
        },
        {
            "number": 5,
            "question": "What is this?",
            "images": "images/freezer.png",
            "answers": [
                "Toaster",
                "Freezer",
                "Can Opener",
                "Measuring Jug"
            ],
            "correct_answer": 1,
            "hint": "Likner norske ordet"
        },
        {
            "number": 6,
            "question": "What is this?",
            "images": "images/spatula.png",
            "answers": [
                "Spatula",
                "Corkskrew",
                "Oven Gloves",
                "Aluminium foil"
            ],
            "correct_answer": 0,
            "hint": "Ikke Corkskrew"
        },
        {
            "number": 7,
            "question": "What is this?",
            "images": "images/vegetablepeeler.png",
            "answers": [
                "Fridge",
                "Kitchen scales",
                "Pizza Cutter",
                "Vegetable peeler"
            ],
            "correct_answer": 3,
            "hint": "2 ord"
        },
        {
            "number": 8,
            "question": "Hvilket kjøkken-redskap er dette?",
            "images": "images/teaspoon.png",
            "answers": [
                "Microwave",
                "Plastic wrap",
                "Teaspoon",
                "Kettle"
            ],
            "correct_answer": 2,
            "hint": "Poo er i ordet"
        },
        {
            "number": 9,
            "question": "Hvilket kjøkken-redskap er dette?",
            "images": "images/strainer.png",
            "answers": [
                "Casserole",
                "Kitchen scissors",
                "Strainer",
                "Laddle"
            ],
            "correct_answer": 2,
            "hint": "Rain er i ordet"
        },
        {
            "number": 10,
            "question": "Hvilket kjøkken-redskap er dette?",
            "images": "images/bottles.png",
            "answers": [
                "Bottles",
                "Thermos",
                "Cutting board",
                "Napkin"
            ],
            "correct_answer": 0,
            "hint": "Ikke Thermos"
        }

    ]
}

var count = 0;
var frames1 = 0;
var frames2 = 0;
var frames3 = 0;
var progress = 0;
var redProgress = 0;
var cor = 0;
var wrong = 0;


function hint() {
    count--;
    var question = jsonData.questions[count];
    var hint = question.hint;
    console.log(hint)
    count++;
    document.getElementById("hint").innerHTML = hint; 
}




nextAnswers();

function answer(answer) {
    count--;
    var question = jsonData.questions[count];
    var correct = question.correct_answer;
    switch (answer) {
        case 0:
            if (correct === 0) {
                resultsButton();
                document.getElementById("nextText").textContent = "Riktig";
                count++;
                cor++;
                progressBar();
            } else {
                resultsButton();
                document.getElementById("nextText").textContent = "Feil";
                count++;
                wrong++;
                failProgressBar();
            }
            break;
        case 1:
            if (correct === 1) {
                resultsButton();
                document.getElementById("nextText").textContent = "Riktig";
                count++;
                cor++;
                progressBar();
            } else {
                resultsButton();
                document.getElementById("nextText").textContent = "Feil";
                count++;
                wrong++;
                failProgressBar();
            }
            break;
        case 2:
            if (correct === 2) {
                resultsButton();
                document.getElementById("nextText").textContent = "Riktig";
                count++;
                cor++;
                progressBar();
            } else {
                resultsButton();
                document.getElementById("nextText").textContent = "Feil";
                count++;
                wrong++;
                failProgressBar();
            }
            break;
        case 3:
            if (correct === 3) {
                resultsButton();
                document.getElementById("nextText").textContent = "Riktig";
                count++;
                cor++;
                progressBar();
            } else {
                resultsButton();
                document.getElementById("nextText").textContent = "Feil";
                count++;
                wrong++;
                failProgressBar();
            }
            break;
        default:
    }
    blur();
}

function resultsButton() {
    if (count === 9) {
        document.getElementById("nextAnswers").textContent = "Resultater";
    }
}

function blur() {
    if (frames2 == 0) {
        frames2 = 1;
        var blurCSS = document.getElementById("blur");
        var blurAmount = 0;
        var id = setInterval(frame, 20);

        function frame() {
            if (blurAmount >= 10) {
                clearInterval(id);
                frames2 = 0;
            } else {
                blurAmount++;
                blurCSS.style.filter = "blur(" + blurAmount + "px)";
            }
        }
    }
    document.getElementById("next").style.display = "flex";
}

function nextAnswers() {
    if (count === 10) {
        final();
    } else {
        next();
    }
}

function next() {
    var question = jsonData.questions[count];
    var image = question.images;
    var correct = question.correct_answer;
    var answer1 = question.answers[0];
    var answer2 = question.answers[1];
    var answer3 = question.answers[2];
    var answer4 = question.answers[3];
    const visHint = 'Vis hint';
    count++;
    document.getElementById("answer1").innerHTML = answer1;
    document.getElementById("answer2").innerHTML = answer2;
    document.getElementById("answer3").innerHTML = answer3;
    document.getElementById("answer4").innerHTML = answer4;
    document.getElementById("image").src = image;
    document.getElementById("hint").innerHTML = visHint;
    document.getElementById("blur").style.filter = "blur(0px)";
    document.getElementById("next").style.display = "none";
}

function final() {
    document.getElementById("blur").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("final").style.display = "flex";
    document.getElementById("results").innerHTML =
    "Du fikk \r\n" + "<span class='cor'>" + cor + "</span>" + " riktig svar\r\n" +
    "<span class='wrong'>" + wrong + "</span>" + " feil svar";
}

function progressBar() {
    progress += 10;
    if (progress >= 9) {
        document.getElementById("redStatus").style.borderRadius = "0px 0px 0px 0px";
    }
    if (frames1 == 0) {
        frames1 = 1;
        var status = document.getElementById("status");
        var statusText = document.getElementById("statusText");
        var width = progress - 10;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= progress) {
                clearInterval(id);
                frames1 = 0;
            } else {
                width++;
                status.style.width = width + "%";
            }
        }
    }
    statusText.innerHTML = (progress + redProgress) / 10 + " / 10";
}

function failProgressBar() {
    redProgress += 10;
    if (progress >= 9) {
        document.getElementById("redStatus").style.borderRadius = "0px 0px 0px 0px";
    }
    if (frames3 == 0) {
        frames3 = 1;
        var redStatus = document.getElementById("redStatus");
        var statusText = document.getElementById("statusText");
        var width = redProgress - 10;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= redProgress) {
                clearInterval(id);
                frames3 = 0;
            } else {
                width++;
                redStatus.style.width = width + "%";
            }
        }
    }
    statusText.innerHTML = (progress + redProgress) / 10 + " / 10";
}