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
            "hint": "la det synke inn"
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
            "hint": "Ruter"
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
            "hint": "Comes in a casserole"
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
            "hint": "A type of salad"
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
            "hint": "Comes from the sea"
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
            "hint": "Dessert"
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
            "hint": "Dessert"
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
            "hint": "Pasta and Meat"
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
            "hint": "Sausage"
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

function answer() {
    count--;
    var question = jsonData.questions[count];
    var correct = question.correct_answer;
    let submit = document.getElementById("answerInput").value;
    let submitted = submit.toLowerCase();
    resultsButton();
    blur();
    count++;
    console.log(submitted);
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
    document.getElementById("answers2").style.display = "none";
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
    const visHint = 'Vis hint';
    var hint = question.hint;
    count++;
    document.getElementById("image").src = image;
    document.getElementById("hint").innerHTML = visHint;
    document.getElementById("blur").style.filter = "blur(0px)";
    document.getElementById("next").style.display = "none";
    document.getElementById("answers2").style.display = "flex";
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