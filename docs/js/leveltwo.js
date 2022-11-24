var jsonData = {
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
            "images": "images/banana.png",
            "answers": [
                "Fork",
                "Glass",
                "Blender",
                "Sink"
            ],
            "correct_answer": 3,
            "hint": ""
        },
        {
            "number": 2,
            "question": "What is this?",
            "images": "images/waffle.png",
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
            "images": "images/pie.png",
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
            "images": "images/ceasarsalad.png",
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
            "images": "images/salmon.png",
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
            "images": "images/smores.png",
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
            "images": "images/cookies.png",
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
            "images": "images/stroganof.png",
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
            "images": "images/hotdogs.png",
            "answers": [
                "Casserole",
                "Kitchen scissors",
                "Drainer",
                "Laddle"
            ],
            "correct_answer": 2,
            "hint": "Sausage"
        },
        {
            "number": 10,
            "question": "Hvilket kjøkken-redskap er dette?",
            "images": "images/burritos.png",
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
var progress = 0;
var counter = 0;

nextAnswers();

function answer(answer) {
    count--;
    var question = jsonData.questions[count];
    var correct = question.correct_answer;
    switch (answer) {
        case 0:
            if (correct === 0) {
                document.getElementById("nextText").innerHTML = "Correct";
                count++;
            } else {
                document.getElementById("nextText").innerHTML = "Wrong";
                count++;
            }
            break;
        case 1:
            if (correct === 1) {
                document.getElementById("nextText").innerHTML = "Correct";
                count++;
            } else {
                document.getElementById("nextText").textContent = "Wrong";
                count++;
            }
            break;
        case 2:
            if (correct === 2) {
                document.getElementById("nextText").textContent = "Correct";
                count++;
            } else {
                document.getElementById("nextText").textContent = "Wrong";
                count++;
            }
            break;
        case 3:
            if (correct === 3) {
                document.getElementById("nextText").textContent = "Correct";
                console.log(question.correct_answer);
            } else {
                document.getElementById("nextText").textContent = "Wrong";
                console.log(question.correct_answer);
            }
            break;
        default:

    }
    progress += 10;
    progressBar();
    blur();
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
    var question = jsonData.questions[count];
    var image = question.images;
    var correct = question.correct_answer;
    var answer1 = question.answers[0];
    var answer2 = question.answers[1];
    var answer3 = question.answers[2];
    var answer4 = question.answers[3];
    count++;
    document.getElementById("answer1").innerHTML = answer1;
    document.getElementById("answer2").innerHTML = answer2;
    document.getElementById("answer3").innerHTML = answer3;
    document.getElementById("answer4").innerHTML = answer4;
    document.getElementById("image").src = image;
    document.getElementById("blur").style.filter = "blur(0px)";
    document.getElementById("next").style.display = "none";
}

function progressBar() {
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
    statusText.innerHTML = width / 10 + 1 + " / 10";
}