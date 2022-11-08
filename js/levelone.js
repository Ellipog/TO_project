var jsonData = {
    "module": {
      "number": 1,
      "name": "Level-one",
      "questions": 10,
      "revision": "HUH"
    },
    "questions": [
      {
        "number": 1,
        "question": "What food is this?",
        "answers": [
          "Banana",
          "Apple",
          "Strawberry",
          "Blueberry"
        ],
        "correct_answer": 1,
        "hint":"Yellow Fruit"
      },
      {
        "number": 2,
        "question": "What food is this?",
        "answers": [
          "Pancake",
          "Waffle",
          "Scones",
          "Nuggets"
        ],
        "correct_answer": 2,
        "hint":"Heart shaped"
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
        "correct_answer": 3,
        "hint":"Comes in a casserole"
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
        "correct_answer": 3,
        "hint":"A type of salad"
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
        "correct_answer": 4,
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
        "correct_answer": 3,
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
        "correct_answer": 4,
        "hint":"Dessert"
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
        "correct_answer": 1,
        "hint":"Pasta and Meat"
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
        "correct_answer": 2,
        "hint":"Sausage"
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
        "correct_answer": 4,
        "hint":"looks like a taco"
      }
      
    ]
  }

  var count = 0;

  function answer_one() {
    var question = jsonData.questions[count]
    var answer1 = question.answers[0];
    count++;
    document.getElementById("answer1").innerHTML = answer1;
    
  }