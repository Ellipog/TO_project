const jsonData = {
    "module": {
        "number": 1,
        "name": "Level-three",
        "images": 10,
        "questions": 10,
        "revision": "HUH"
    },
    "questions": [{
            "number": 1,
            "images": "images/laptop.png",
            "answers": [
                "Curling Iron",
                "Blender",
                "Remote control",
                "Laptop"
            ],
            "correct_answer": 3,
            "hint": "ikke 'Blender' eller 'Curling iron'"
        },
        {
            "number": 2,
            "images": "images/radiator.png",
            "answers": [
                "Ear phones",
                "Radiator",
                "Copier",
                "Electric guitar"
            ],
            "correct_answer": 1,
            "hint": "Et ord"
        },
        {
            "number": 3,
            "images": "images/ceilingfan.png",
            "answers": [
                "Reading light",
                "Ceiling fan",
                "Printer",
                "Computer mouse"
            ],
            "correct_answer": 1,
            "hint": "2 ord"
        },
        {
            "number": 4,
            "images": "images/digitalcamera.png",
            "answers": [
                "Coffee maker",
                "Hair dryer",
                "Charger",
                "Digital camera"
            ],
            "correct_answer": 3,
            "hint": "Nesten norsk"
        },
        {
            "number": 5,
            "images": "images/drone.png",
            "answers": [
                "Drone",
                "Speaker",
                "USB drive",
                "MODEM"
            ],
            "correct_answer": 0,
            "hint": "Likt som norsk"
        },
        {
            "number": 6,
            "images": "images/router.png",
            "answers": [
                "Smartwatch",
                "Webcam",
                "Router",
                "Drill"
            ],
            "correct_answer": 2,
            "hint": "6 bokstaver"
        },
        {
            "number": 7,
            "images": "images/headphones.png",
            "answers": [
                "Headphones",
                "TV",
                "Digital thermometer",
                "Disco Light"
            ],
            "correct_answer": 0,
            "hint": "Et ord"
        },
        {
            "number": 8,
            "images": "images/gameconsole.png",
            "answers": [
                "Microwave",
                "Phone",
                "Game console",
                "Light bulbs"
            ],
            "correct_answer": 2,
            "hint": "2 ord"
        },
        {
            "number": 9,
            "images": "images/amplifier.png",
            "answers": [
                "SD card",
                "Amplifier",
                "Tablet",
                "Fan"
            ],
            "correct_answer": 1,
            "hint": "Mest bokstaver"
        },
        {
            "number": 10,
            "images": "images/vr.png",
            "answers": [
                "VR",
                "Fridge",
                "Monitor",
                "Radio"
            ],
            "correct_answer": 0,
            "hint": "En forkortelse"
        }

    ]
}

<<<<<<< HEAD
=======

>>>>>>> 43dcd0d58875aa2dece769b184e5b34069ea17fc
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
<<<<<<< HEAD
    document.getElementById("hint").innerHTML = hint;
=======
    document.getElementById("hint").innerHTML = hint; 
>>>>>>> 43dcd0d58875aa2dece769b184e5b34069ea17fc
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
    document.getElementById("answers").style.display = "none";
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
    var hint = question.hint;
    count++;
    document.getElementById("answer1").innerHTML = answer1;
    document.getElementById("answer2").innerHTML = answer2;
    document.getElementById("answer3").innerHTML = answer3;
<<<<<<< HEAD
    document.getElementById("answer4").innerHTML = answer4;
=======
    document.getElementById("answer4").innerHTML = answer4;   
>>>>>>> 43dcd0d58875aa2dece769b184e5b34069ea17fc
    document.getElementById("image").src = image;
    document.getElementById("hint").innerHTML = visHint;
    document.getElementById("blur").style.filter = "blur(0px)";
    document.getElementById("next").style.display = "none";
    document.getElementById("answers").style.display = "flex";
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