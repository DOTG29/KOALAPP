import { _getQuestions } from "./_DATA";
import { _getUsers } from "./_DATA";
import { questiondetail } from "./route";

export function setupQuestion() {
    const questionDetailInfo = document.getElementById("question_detail_info");
    questionDetailInfo.innerHTML = ""
    const containerQuestion = document.getElementById("container_question")
    containerQuestion.innerHTML = ""

    _getQuestions().then(
        function (questions) {
            for (let article in questions) {

                if (
                    (window.tab == "repondu" && didAnwserQuestion(questions[article])) ||
                    (window.tab == "pas-repondu" && didNotAnwserQuestion(questions[article]))) {

                    const contenuQuestion = document.createElement("div");
                    contenuQuestion.innerHTML = `      <div class="container_user_question">
                                                            <h2 class="name">${questions[article].author} demande</h2>
                                                            <p class="question_1">${questions[article].optionOne.text}</p>
                                                            <p class="question_2">${questions[article].optionTwo.text}</p>
                                                            <img class="image_card" src="${window.users[questions[article].author].avatarURL}" alt="img">
                                                            <button class="envoyer">View poll</button>
                                                       </div>`
                    containerQuestion.appendChild(contenuQuestion);

                    contenuQuestion.addEventListener('click', () => { 
                        questiondetail(article);


                        if (didAnwserQuestion(questions[article])) {
                            const totalVotes = questions[article].optionOne.votes.length + questions[article].optionTwo.votes.length;
                            const optionOnePercentage = questions[article].optionOne.votes.length / totalVotes * 100;
                            const optionTwoPercentage = questions[article].optionTwo.votes.length / totalVotes * 100;

                            const containerQuestionDetail = document.createElement("div")
                            containerQuestionDetail.innerHTML = `<h2>${questions[article].author} demande</h2>
                                                                 <p class="rather">Would you rather</p>
                                                                 <img src="${window.users[questions[article].author].avatarURL}" alt="">
                                                                 <div class="container_votes">
                                                                    <p>${questions[article].optionOne.text}</p>
                                                                    <div class="progress  bg-secondary-subtle" role="progressbar" aria-label="Example with label" aria-valuemin="0" aria-valuemax="100">
                                                                        <div class="progress-bar bg-secondary text-dark" style="width:${optionOnePercentage}%">${optionOnePercentage}%</div>
                                                                    </div>
                                                                    <p class="votes">${questions[article].optionOne.votes.length} out of ${totalVotes} votes</p>
                                                                 </div>
                      
                                                                 <div class="container_votes">
                                                                    <p>${questions[article].optionTwo.text}</p>
                                                                    <div class="progress bg-secondary-subtle" role="progressbar" aria-label="Example with label" aria-valuemin="0" aria-valuemax="100">
                                                                        <div class="progress-bar bg-secondary text-dark" style="width: ${optionTwoPercentage}%">${optionTwoPercentage}%</div>
                                                                    </div>
                                                                    <p class="votes">${questions[article].optionTwo.votes.length} out of ${totalVotes} votes</p>
                                                                 </div>`


                            questionDetailInfo.appendChild(containerQuestionDetail);

                        } else if (didNotAnwserQuestion(questions[article])) {
                            const containerQuestionDetail = document.createElement("div")
                            containerQuestionDetail.innerHTML = ` <h2>${questions[article].author} demande</h2>
                                                             <p class="rather">Would you rather </p>
                                                             <img src="${window.users[questions[article].author].avatarURL}" alt="">
                                                             <div class="question_detail_1">
                                                                <input type="radio" id="option" name="option" value="option_1" />
                                                                <label for="option">${questions[article].optionOne.text}</label>
                                                             </div>
                            
                                                             <div class="question_detail_2">
                                                                <input type="radio" id="option" name="option" value="option_2" />
                                                                <label for="option">${questions[article].optionTwo.text}</label>
                                                             </div>
                                                             <button>submit</button>`

                            questionDetailInfo.appendChild(containerQuestionDetail);

                        }

                        
                    });
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