import { home, leaderboard, login, newquestion } from "./route";

const buttonLogin = document.getElementById('button-login');
const buttonLogout = document.getElementById('button-logout');
const buttonHome = document.getElementById('button-home');
const buttonNewquestion = document.getElementById('button-newquestion');
const buttonLeaderboard = document.getElementById('button-leaderboard');

export function setupEventListeners() {
    buttonLogin.addEventListener('click', () => {
        login();
    });

    buttonLogout.addEventListener('click', () => {
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


};

