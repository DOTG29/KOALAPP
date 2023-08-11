import { _getQuestions } from "./_DATA";

export function setupQuestion(){
    const containerQuestion = document.getElementById("container_question")
    containerQuestion.innerHTML = ""

    _getQuestions().then(
        function(questions){
            for(let article in questions ){
                console.log(questions[article])

                if(
                    (window.tab == "repondu" && didAnwserQuestion(questions[article])) ||
                     (window.tab == "pas-repondu" && didNotAnwserQuestion(questions[article]))) {
                    const contenuQuestion = document.createElement("li");
                    contenuQuestion.innerHTML = `<p>${questions[article].optionOne.text} - by ${questions[article].author}</p>`
                    containerQuestion.appendChild(contenuQuestion);
                }
            }
        }
        
    );
}

function didAnwserQuestion(question) {
    return question.optionOne.votes.indexOf(window.currentUser.id) > -1 || question.optionTwo.votes.indexOf(window.currentUser.id) > -1;
}

function didNotAnwserQuestion(question) {
    return question.optionOne.votes.indexOf(window.currentUser.id) == -1 && question.optionTwo.votes.indexOf(window.currentUser.id) == -1;
}