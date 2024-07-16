function checkAnswer(){
    //identify the correct answer
    var correctAnswer="4";
    //retrieve the User's Answer
    var userAnswer=document.querySelector('input[name="quiz"]:checked').value;
    //Compare the User’s Answer with the Correct Answer:
    if(userAnswer===correctAnswer){
        document.getElementById("feedback").textContent="correct! well done";

    }else{
        document.getElementById("feedback").textContent="Thats incorrect. Try again!";
    }
}
//Add an Event Listener to the Submit Button:
document.getElementById("submit-answer").addEventListener("click", checkAnswer);