import { home, leaderboard, login, newquestion } from "./route";
import {didTapDropdown} from "./dropdown";

const buttonLogin = document.getElementById('button-login');
const buttonLogout = document.getElementById('button-logout');
const buttonHome = document.getElementById('button-home');
const buttonNewquestion = document.getElementById('button-newquestion');
const buttonLeaderboard = document.getElementById('button-leaderboard');
const selectUserDropdown = document.getElementById('select-user-dropdown')

export function setupEventListeners() {

    selectUserDropdown.addEventListener('click', () => {
        didTapDropdown();
    });

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

