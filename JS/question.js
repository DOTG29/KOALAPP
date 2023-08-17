import { _getQuestions } from "./_DATA";
import { _getUsers } from "./_DATA";

export function setupQuestion(){
    const containerQuestion = document.getElementById("container_question")
    containerQuestion.innerHTML = ""

    _getQuestions().then(
        function(questions){
            for(let article in questions){
                console.log(questions[article])

                // if(
                //     (window.tab == "repondu" && didAnwserQuestion(questions[article])) ||
                //      (window.tab == "pas-repondu" && didNotAnwserQuestion(questions[article]))) {
                //     const contenuQuestion = document.createElement("li");
                //     contenuQuestion.innerHTML = `<p>${questions[article].optionOne.text} - by ${questions[article].author}</p>`
                //     containerQuestion.appendChild(contenuQuestion);
                // }

                if(
                    (window.tab == "repondu" && didAnwserQuestion(questions[article])) ||
                     (window.tab == "pas-repondu" && didNotAnwserQuestion(questions[article]))) {


                    const contenuQuestion = document.createElement("div");
                    contenuQuestion.innerHTML = `      <div class="container_user_question m-3">
                                                            <h2 class="name"><span>${window.users[questions[article].author].name}</span><span> demande</span></h2>
                                                            <p class="question_1">${questions[article].optionOne.text}</p>
                                                            <p class="question_2">${questions[article].optionTwo.text}</p>
                                                            <img class="image_card" src="${window.users[questions[article].author].avatarURL}" alt="img">
                                                            <button class="voir-sondage" class="envoyer">Voir le sondage</button>
                                                       </div>`
                    containerQuestion.appendChild(contenuQuestion);
                    console.log(contenuQuestion);
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