import html from './helper/html.js';
import userInfo from '../services/user-info-api.js';

function makeTemplate() {
    return html`
    <div class="header-div">
    <img class="logo" src="assets/logo.png">
    <nav>
        <fieldset class="flex-center">
        <a class="neon" id="textSize" href="./">Home</a>
        <a class="neon" id="textSizeTwo" href="about-us.html">About Us</a>
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
        // use the api
        user.textContent = userInfo.get().username;
        return dom;
    }
}

export default Header;