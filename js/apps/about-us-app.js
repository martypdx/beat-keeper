import html from '../helper/html.js';

function makeTemplate() {
    return html`
    <nav id="nav">
        <div>
            <div class="nav" id="home">
                <a href="./index.html">Home</a>
            </div>
            <div class="nav" id="titled">
                Beat-Keeper
            </div>
            <div class="nav" id="about-link">
                <a href="./about-us.html">About The Devs</a>
            </div>
        </div>
    </nav>
    `;
}

export default class AboutApp {
    render() {
        const dom = makeTemplate();

        return dom;
    }
}
