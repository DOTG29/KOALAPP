import { _getUsers } from "./_DATA";

const element = document.getElementById("select-user-dropdown");
// const users = document.querySelectorAll(".users")
let showDropdownValues = false;

export function didTapDropdown() {
    showDropdownValues = !showDropdownValues;
    if(showDropdownValues) element.classList.remove("closed");
    if(!showDropdownValues) element.classList.add("closed");
}

export function setupDropdown() {
    _getUsers().then(
        function(users) {
            const element = document.getElementById("container_user");
            for(let article in users) {
                const item = document.createElement('li');
                item.className = 'd-flex align-items-center p-1 fs-6 users';
                item.innerHTML = `<img class="rounded-circle" id="image-profil" src="${users[article].avatarURL}" alt="image profil">${users[article].name} `; // TODO id

                element.appendChild(item);
                item.addEventListener('click', () => {
                    window.currentUser = users[article];
                    for(let selectedUserItem of document.getElementsByClassName("selected-user")) {
                       selectedUserItem.innerHTML = `<img class="rounded-circle" id="image-profil" src="${users[article].avatarURL}" alt="image profil">${users[article].name} `;
                    }
                    document.getElementById("button-login").classList.remove("disabled");
                    document.getElementById("button-logout").innerHTML = `<img class="rounded-circle" id="image-profil" src="${users[article].avatarURL}" alt="image profil">${users[article].name} decon`;
                });
            }
        },
        function(error) {
            prompt(error)
        }
      );
}