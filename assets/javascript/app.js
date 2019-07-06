//register unser inputs
//check answers
//log if question is correct
//timer 
//log losses
//display wrong / correct answers

window.onload = function () {

    $("#stop").on("click", stop);
    $("#reset").on("click", reset);
    $("#start").on("click", start);
};

console.log("hello world")

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

    var messages = ["great job", "that's just okay", "you really need to do better"];
    var pictures = ["/images/win.gif", "/images/not good.gif", "/images/lose.gif"]

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
    document.getElementById("picture").src = pictures[range];
}