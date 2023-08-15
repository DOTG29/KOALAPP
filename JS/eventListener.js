import { home, leaderboard, login, newquestion } from "./route";
import {didTapDropdown} from "./dropdownLogin";
import { setupQuestion } from "./question";

const buttonLogin = document.getElementById('button-login');
const buttonLogout = document.getElementById('button-logout');
const buttonHome = document.getElementById('button-home');
const buttonNewquestion = document.getElementById('button-newquestion');
const buttonLeaderboard = document.getElementById('button-leaderboard');
const selectUserDropdown = document.getElementById('select-user-dropdown')
const questionRepondu = document.getElementById('question-repondu');
const questionPasRepondu = document.getElementById('question-pas-repondu');

export function setupEventListeners() {

    selectUserDropdown.addEventListener('click', () => {
        didTapDropdown();
    });

    buttonLogin.addEventListener('click', () => {
        login();
    });

    buttonLogout.addEventListener('click', (event) => {
        event.preventDefault()
        logout();
    });

    buttonHome.addEventListener('click', () => {
        home();
    });

    buttonNewquestion.addEventListener('click', () => {
        newquestion();
    });

    buttonLeaderboard.addEventListener('click', () => {
        leaderboard();
    });

    questionRepondu.addEventListener('click', () => {
        setupQuestion();
        window.tab = "repondu"
    })

    questionPasRepondu.addEventListener('click', () => {
        setupQuestion();
        window.tab = "pas-repondu"
    })
};

