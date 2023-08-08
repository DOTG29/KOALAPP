const loginPage = document.getElementById('login');
const homePage = document.getElementById('homepage');
const navbar = document.getElementById('navbar');
const newquestionPage = document.getElementById('newquestion');
const leaderboardPage = document.getElementById('leaderboard');


export function login() {
    cachePage();
    navbar.classList.add("show")
    homePage.classList.add("show")
    history.pushState(null, "", 'homepage'); 
}

export function logout() {
    cachePage();
    loginPage.classList.add("show")
    history.pushState(null, "", 'login'); 
}

export function home() {
    cachePage();
    navbar.classList.add("show")
    homePage.classList.add("show")
    history.pushState(null, "", 'homepage'); 
}

export function newquestion() {
    cachePage();
    navbar.classList.add("show")
    newquestionPage.classList.add("show")
    history.pushState(null, "", 'addquestion'); 
}

export function leaderboard() {
    cachePage();
    navbar.classList.add("show")
    leaderboardPage.classList.add("show")
    history.pushState(null, "", 'leaderboard'); 
}

function cachePage() {
    const elements = document.querySelectorAll('.page');

    elements.forEach((element) => {
        element.classList.remove('show');
    });
}