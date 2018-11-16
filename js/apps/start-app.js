import html from '../helper/html.js';
import StartForm from '../apps/start-form.js';
import Header from '../header.js';

function makeTemplate() {
    return html`
    <header></header>
    <div id="form">
    </div>
    <div class="speaker-div">
    <img src="./assets/speaker.jpg" class="speaker" id="speakerLeft">
    <img src="./assets/speaker.jpg" class="speaker" id="speakerRight">
    </div>
    `;
}



export default class StartApp {
    render() {
        const dom = makeTemplate();

        const userForm = dom.getElementById('form');
        const headerSection = dom.querySelector('header');

        const form = new StartForm();
        const header = new Header();

        userForm.appendChild(form.render());
        headerSection.appendChild(header.render());

        return dom;
    }
}