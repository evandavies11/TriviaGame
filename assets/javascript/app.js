//register unser inputs
//check answers
//log if question is correct
//timer 
//log losses
//display wrong / correct answers



console.log("hello world")

countDown(60, "timer")

function countDown(secs, elem) {
    var element = document.getElementById(elem);
    element.innerHTML = "You Have " + secs + " Seconds Left !";
    if (secs < 1) {
        clearTimeout(time);
        element.innerHTML = "afterSubmit";
    }

    secs--;
    var time = setTimeout('counDown (' + secs + ',' + elem + ')', 1000);

}

function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var correct = 0;

    if (question1 == "death star") {
        correct++;
    }


    if (question2 == "millenium faclon") {
        correct++;
    }

    if (question3 == "C-3PO") {
        correct++;
    }

    if (question4 == "Carrie Fischer") {
        correct++;
    }

    if (question5 == "12") {
        correct++;
    }

    if (question6 == "Mos Eisley") {
        correct++;
    }

    var messages = ["You Earned That Lightsaber", "You Might Be A Jedi Someday", "Darth Vader Got You", "The Empire Has Won"];


    var range;

    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 6) {
        range = 1
    }

    if (correct > 2) {
        range = 0;
    }



    document.getElementById("afterSubmit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("numberCorrect").innerHTML = "You Got " + correct + " correct.";
    document.getElementById("numberIncorrect").innerHTML = "You Got " + incorrect + " incorrect.";

}