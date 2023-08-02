import { login, logout} from './route'
import { setupEventListeners } from './eventListener';


setupEventListeners();
logout();

window.logout = logout;
window.login = login;