import { login, logout} from './route'
import { setupEventListeners } from './eventListener';
import { setupDropdown } from './dropdownLogin';

window.currentUser;

setupEventListeners();
logout();
setupDropdown();

window.logout = logout;
window.login = login;
window.tab = "pas-repondu"
window.tab = "repondu"