const jsonData = {
    "module": {
        "name": "Level-five",
        "questions": 20,
        "revision": "HUH"
    },
    "questions": [{
            "number": 1,
            "images": "images/banana.png",
            "answers": "banana",
            "hint": "Likner norske ordet"
        },
        {
            "number": 2,
            "images": "images/pie.png",
            "answers": "pie",
            "hint": "Mindre enn 4 bokstaver"
        },
        {
            "number": 3,
            "images": "images/salmon.png",
            "answers": "salmon",
            "hint": "Ikke bread"
        },
        {
            "number": 4,
            "images": "images/cookies.png",
            "answers": "Ccookies",
            "hint": "Ett ord"
        },
        {
            "number": 5,
            "images": "images/hotdogs.png",
            "answers": "hotdogs",
            "hint": "Et ord"
        },
        {
            "number": 6,
            "images": "images/sink.png",
            "answers": "sink",
            "hint": "Rimer på flink"
        },
        {
            "number": 7,
            "images": "images/mug.png",
            "answers": "a mug",
            "hint": "2 ord"
        },
        {
            "number": 8,
            "images": "images/freezer.png",
            "answers": "freezer",
            "hint": "Likner norske ordet"
        },
        {
            "number": 9,
            "images": "images/vegetablepeeler.png",
            "answers": "vegetable peeler",
            "hint": "2 ord"
        },
        {
            "number": 10,
            "images": "images/strainer.png",
            "answers": "strainer",
            "hint": "Rain er i ordet"
        },
        {
            "number": 11,
            "images": "images/laptop.png",
            "answers": "laptop",
            "hint": "ikke 'Blender' eller 'Curling iron'"
        },
        {
            "number": 12,
            "images": "images/ceilingfan.png",
            "answers": "ceiling fan",
            "hint": "2 ord"
        },
        {
            "number": 13,
            "images": "images/drone.png",
            "answers": "drone",
            "hint": "Likt som norsk"
        },
        {
            "number": 14,
            "images": "images/headphones.png",
            "answers": "headphones",
            "hint": "Et ord"
        },
        {
            "number": 15,
            "images": "images/amplifier.png",
            "answers": "amplifier",
            "hint": "Mest bokstaver"
        },
        {
            "number": 16,
            "images": "images/caps.png",
            "answers": "caps",
            "hint": "Norsk-engelsk"
        },
        {
            "number": 17,
            "images": "images/shirt.png",
            "answers": "shirt",
            "hint": "5 bokstaver"
        },
        {
            "number": 18,
            "images": "images/pants.png",
            "answers": "pants",
            "hint": "Ikke Hat eller Boots"
        },
        {
            "number": 19,
            "images": "images/sweater.png",
            "answers": "sweater",
            "hint": "Begynner på S"
        },
        {
            "number": 20,
            "images": "images/jeans.png",
            "answers": "jeans",
            "hint": "Et ord"
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
    var correct = question.answers;
    let submit = document.getElementById("answerInput").value;
    let submitted = submit.toLowerCase();
    if (submitted == correct) {
        document.getElementById("nextText").textContent = "Riktig";
        cor++;
        progressBar();
    } else {
        document.getElementById("nextText").textContent = "Feil";
        wrong++;
        failProgressBar();
    }
    resultsButton();
    blur();
    count++;
    console.log(submitted);
    document.getElementById("answerInput").value = "";
}

const autoType = document.getElementById("answerInput");

autoType.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        answer();
    }
});

const nextAnswerEnter = document.getElementById("nextAnswers");

nextAnswerEnter.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    nextAnswers();
  }
});


function resultsButton() {
    if (count === 19) {
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
    if (count === 20) {
        final();
    } else {
        next();
    }
}

function next() {
    var question = jsonData.questions[count];
    var image = question.images;
    var correct = question.answers;
    const visHint = 'Vis hint';
    var hint = question.hint;
    count++;
    document.getElementById("image").src = image;
    document.getElementById("hint").innerHTML = visHint;
    document.getElementById("blur").style.filter = "blur(0px)";
    document.getElementById("next").style.display = "none";
    document.getElementById("answers2").style.display = "flex";
    document.getElementById("answerInput").focus();
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
    progress += 5;
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
    statusText.innerHTML = (progress + redProgress) / 5 + " / 20";
}

function failProgressBar() {
    redProgress += 5;
    if (progress >= 9) {
        document.getElementById("redStatus").style.borderRadius = "0px 0px 0px 0px";
    } else if (progress >= 1) {
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
    statusText.innerHTML = (progress + redProgress) / 5 + " / 20";
}