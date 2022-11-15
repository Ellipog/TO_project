var jsonData = {
    "module": {
        "number": 1,
        "name": "Level-one",
        "questions": 10,
        "revision": "HUH"
    },
    "questions": [{
            "number": 1,
            "question": "What food is this?",
            "images": "images/banana.jpeg",
            "answers": [
                "Banana",
                "Apple",
                "Strawberry",
                "Blueberry"
            ],
            "correct_answer": 0,
            "hint": "Yellow Fruit"
        },
        {
            "number": 2,
            "question": "What food is this?",
            "images": "images/waffle.jpeg",
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
            "answers": [
                "Lasagne",
                "BBQ Ribs",
                "Apple Pie",
                "Chocolate Chip Cookies"
            ],
            "correct_answer": 3,
            "hint": "Dessert"
        },
        {
            "number": 8,
            "question": "What food is this?",
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
            "answers": [
                "Spaghetti and meatballs",
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

nextAnswers();

function answer(answer) {
    var question = jsonData.questions[count];
    var correct = question.correct_answer;
    switch (answer) {
        case 1:
            if (question.correct_answer === 1) {
                document.getElementById("nextText").innerHTML = "Correct";
            } else {
                document.getElementById("nextText").innerHTML = "Wrong";
            }
            break;
        case 2:
            if (question.correct_answer === 2) {
                document.getElementById("nextText").innerHTML = "Correct";
            } else {
                document.getElementById("nextText").textContent = "Wrong";
            }
            break;
        case 3:
            if (question.correct_answer === 3) {
                document.getElementById("nextText").textContent = "Correct";
            } else {
                document.getElementById("nextText").textContent = "Wrong";
            }
            break;
        case 4:
            if (question.correct_answer === 4) {
                document.getElementById("nextText").textContent = "Correct";
            } else {
                document.getElementById("nextText").textContent = "Wrong";
            }
            break;
        default:

    }
    blur();
}

function blur() {
    document.getElementById("blur").style.filter = "blur(5px)";
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