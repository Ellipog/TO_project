const jsonData = {
    "module": {
        "name": "Level-four",
        "questions": 10,
        "revision": "HUH"
    },
    "questions": [{
            "number": 1,
            "images": "images/caps.png",
            "answers": [
                "Caps",
                "Boxer shorts",
                "Tie",
                "Gloves"
            ],
            "correct_answer": 0,
            "hint": "Norsk-engelsk"
        },
        {
            "number": 2,
            "images": "images/sneakers.png",
            "answers": [
                "Mittons",
                "Bowtie",
                "Tights",
                "Sneakers"
            ],
            "correct_answer": 3,
            "hint": "Flest bokstaver"
        },
        {
            "number": 3,
            "images": "images/shirt.png",
            "answers": [
                "Tank top",
                "Shirt",
                "Vest",
                "Scarf"
            ],
            "correct_answer": 1,
            "hint": "5 bokstaver"
        },
        {
            "number": 4,
            "images": "images/socks.png",
            "answers": [
                "Socks",
                "Belt",
                "Swim suit",
                "Suspenders"
            ],
            "correct_answer": 0,
            "hint": "Likner norsk"
        },
        {
            "number": 5,
            "images": "images/pants.png",
            "answers": [
                "Hat",
                "Rain coat",
                "Pants",
                "Boots"
            ],
            "correct_answer": 2,
            "hint": "Ikke Hat eller Boots"
        },
        {
            "number": 6,
            "images": "images/jacket.png",
            "answers": [
                "Sunglasses",
                "Hoodie",
                "Sweatpants",
                "Jacket"
            ],
            "correct_answer": 3,
            "hint": "C er i ordet"
        },
        {
            "number": 7,
            "images": "images/sweater.png",
            "answers": [
                "Track suit",
                "High heels",
                "Sweater",
                "Skirt"
            ],
            "correct_answer": 2,
            "hint": "Begynner på S"
        },
        {
            "number": 8,
            "images": "images/shorts.png",
            "answers": [
                "Suit",
                "Shorts",
                "Polo Shirt",
                "Singlet"
            ],
            "correct_answer": 1,
            "hint": "Norsk-engelsk"
        },
        {
            "number": 9,
            "images": "images/jeans.png",
            "answers": [
                "Sneakers",
                "Blazer",
                "Jeans",
                "Flip flops"
            ],
            "correct_answer": 2,
            "hint": "Et ord"
        },
        {
            "number": 10,
            "images": "images/pajamas.png",
            "answers": [
                "Gym clothes",
                "Blouse",
                "Pajamas",
                "Dress"
            ],
            "correct_answer": 2,
            "hint": "Også et norsk ord"
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
    document.getElementById("answer4").innerHTML = answer4;
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