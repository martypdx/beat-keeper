import html from './helper/html.js';
import userData from './services/user-api.js';

function makeTemplate() {
    return html`
    <div class="header-div">
    <img class="logo" src="assets/logo.png">
    <nav>
        <fieldset class="flex-center">
        <a class="nav-links" href="./">Home</a>
        <a class="nav-links" href="about-us.html">About Us</a>
        <span class="nav-right">user: <span class="user"></span></span>
        </fieldset>
    </nav>
    </div>
`;
}

class Header {
    render() {
        const dom = makeTemplate();

        const user = dom.querySelector('.user');
        user.textContent = localStorage.getItem('username', userData.username);

        return dom;
    }
}

export default Header;