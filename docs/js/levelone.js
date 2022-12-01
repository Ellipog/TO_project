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
            "question": "What food is this?",
            "images": "images/banana.png",
            "answers": [
                "Banana",
                "Apple",
                "Strawberry",
                "Blueberry"
            ],
            "correct_answer": 0,
            "hint": "Yellow"
        },
        {
            "number": 2,
            "question": "What food is this?",
            "images": "images/waffle.png",
            "answers": [
                "Pancake",
                "Waffle",
                "Scones",
                "Nuggets"
            ],
            "correct_answer": 1,
            "hint": "Heart shaped"
        },
        {
            "number": 3,
            "question": "What food is this?",
            "images": "images/pie.png",
            "answers": [
                "Taco",
                "Steak",
                "Pie",
                "Mac'N Cheese"
            ],
            "correct_answer": 2,
            "hint": "Comes in a casserole"
        },
        {
            "number": 4,
            "question": "What food is this?",
            "images": "images/ceasarsalad.png",
            "answers": [
                "Corn Flakes",
                "Mushrooms",
                "Ceasar Salad",
                "Yoghurt"
            ],
            "correct_answer": 2,
            "hint": "A type of salad"
        },
        {
            "number": 5,
            "question": "What food is this?",
            "images": "images/salmon.png",
            "answers": [
                "Tater Tots",
                "Bread",
                "Fajitas",
                "Salmon"
            ],
            "correct_answer": 3,
            "hint": "Comes from the sea"
        },
        {
            "number": 6,
            "question": "What food is this?",
            "images": "images/smores.png",
            "answers": [
                "P&J Sandwich",
                "Enchiladas",
                "Smores",
                "Chicken wings"
            ],
            "correct_answer": 2,
            "hint": "Dessert"
        },
        {
            "number": 7,
            "question": "What food is this?",
            "images": "images/cookies.png",
            "answers": [
                "Lasagne",
                "BBQ Ribs",
                "Apple Pie",
                "Cookies"
            ],
            "correct_answer": 3,
            "hint": "Dessert"
        },
        {
            "number": 8,
            "question": "What food is this?",
            "images": "images/stroganof.png",
            "answers": [
                "Beef Stroganof",
                "Spagetthi and Meatballs",
                "Chicken and Rice",
                "Pizza"
            ],
            "correct_answer": 0,
            "hint": "Pasta and Meat"
        },
        {
            "number": 9,
            "question": "What food is this?",
            "images": "images/hotdogs.png",
            "answers": [
                "Nachos",
                "Hot Dogs",
                "Cheese Burger",
                "Turkey"
            ],
            "correct_answer": 1,
            "hint": "Sausage"
        },
        {
            "number": 10,
            "question": "What food is this?",
            "images": "images/burritos.png",
            "answers": [
                "Spaghetti",
                "Fried chicken",
                "Beef stir fry",
                "Burritos"
            ],
            "correct_answer": 3,
            "hint": "looks like a taco"
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