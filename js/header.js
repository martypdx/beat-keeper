import html from './helper/html.js';

var data = JSON.parse(localStorage.getItem('userInfo'));
// console.log(data);

function makeTemplate() {
    return html`
    <div class="header-div">
    <img class="logo" src="assets/logo.png">
    <nav>
        <fieldset class="flex-center">
        <a class="nav-links" href="./">Home</a>
        <a class="nav-links" href="about-us.html">About Us</a>
        <span class="nav-right">Welcome, ${data.username}!</span>
        </fieldset>
    </nav>
    </div>
`;
}

class Header {
    render() {
        const dom = makeTemplate();

        return dom;
    }
}

export default Header;