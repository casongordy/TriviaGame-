$(document).ready(function() {


   
    var totalQuiz = 15,
        correctAnswer = 0,
        incorrectAnswer = 0,
        noAnswer = 0,
        questionIndex = 0,
        count = 60;


    var questions = [{
        question: "How many U.S. states border the Gulf of Mexico?",
        choices: ["5", "7", "3", "4"],
        answer: 0
    }, {
        question: "What U.S. state has the longest coastline?",
        choices: ["California", "Florida", "Alaska", "Hawaii"],
        answer: 2
    }, {
        question: "Yerevan is the capital of what country?",
        choices: ["Slovenia", "Armenia", "Turkey", "Uzbekistan"],
        answer: 1
    }, {
        question: "Catalonia is a region of what country?",
        choices: ["Spain", "France", "Portugal", "Italy"],
        answer: 0
    }, {
        question: "In what U.S. state would you find Fort Knox?",
        choices: ["Tennessee", "Alabama", "Kentucky", "New York"],
        answer: 2
    }, {
        question: "What nation produces two thirds of the world's vanilla?",
        choices: ["Brazil", "India", "Chile", "Madagascar"],
        answer: 3
    }, {
        question: "What colorful body of water seperates Saudi Arabia from Africa?",
        choices: ["Black Sea", "Red Sea", "Salty Sea", "Ehh..oil-colored sea?"],
        answer: 1
    }, {
        question: "How many languages exist in the world today?",
        choices: ["587", "6,500", "320", "3,990"],
        answer: 1
    }, {
        question: "In which U.S. state would you find Mount Rushmore?",
        choices: ["South Dakota", "New Mexico", "Wyoming", "North Dakota"],
        answer: 0
    }, {
        question: "The Black Forest is located in what European country?",
        choices: ["Denmark", "Switzerland", "Austria", "Germany"],
        answer: 3
    }, {
        question: "What is the largest island in the Caribbean Sea?",
        choices: ["Jamaica", "Cuba", "Aruba", "Dominican Republic"],
        answer: 1
    }, {
        question: "What is the oldest city in the United States?",
        choices: ["Boston", "New York", "uhh.. Delaware?", "Saint Augustine"],
        answer: 3
    }, {
        question: "What island does the Statue of Liberty stand on?",
        choices: ["Ellis Island", "Alcatraz", "Liberty Island", "Maui"],
        answer: 2
    }, {
        question: "How many U.S. states border the Pacific Ocean?",
        choices: ["3", "4", "5", "6"],
        answer: 2
    }, {
        question: "Brazil was once a colony of which European country?",
        choices: ["England", "France", "Portugal", "Spain"],
        answer: 2
    }];

   
    function loadQuestion() {
        
        if (questionIndex < questions.length) {
           
            $('#questions').html(questions[questionIndex].question);
            
            $("#0").text(questions[questionIndex].choices[0]);
            $("#1").text(questions[questionIndex].choices[1]);
            $("#2").text(questions[questionIndex].choices[2]);
            $("#3").text(questions[questionIndex].choices[3]);
        } else {
            clearInterval(timer);
            $("#quiz, #timer").hide("slow");
            $("#results").show("slow");
            scoreCount();
        }
    };


    $(".mc").click(function() {
        userGuess = $(this).attr("id");
        
        if (userGuess == questions[questionIndex].answer) {
            correct = correctAnswer++;
            alert("correct!");
            console.log(correct + " correct");
        } else {
            incorrect = incorrectAnswer++;
            alert("Incorrect!");
            console.log(incorrect + " incorrect");
        }
        questionIndex++;
        loadQuestion();
    });

   
    function scoreCount() {
        var totalAnswered = correctAnswer + incorrectAnswer;
        console.log(totalAnswered);
        if (totalAnswered !== totalQuiz) {
            blank = totalQuiz - totalAnswered;
        }else{
            blank = 0;
        }

        $('#correct').html(" " + correctAnswer);
        $('#incorrect').html(" " + incorrectAnswer);
        $("#blank").html(" " + blank);
    } 

   
    $("#quiz, #results").hide();

   

    $("#play").click(function() {
        $("#start").hide("slow");
        $("#quiz").show("slow");
        loadQuestion();

       

        var startTimer = setInterval(function() {
            count--;
            $("#countdown").html(count);

            

            if (count === 0) {
                clearInterval(timer);
                $("#quiz, #timer").hide("slow");
                $("#results").show("slow");
                scoreCount();
            }
        }, 1000);
    });


    $("#restart").click(function() {
        location.reload();
    });

});