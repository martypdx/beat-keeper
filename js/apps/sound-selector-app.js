import html from '../helper/html.js';
import SoundSelectForm from '../apps/sound-select-form.js';
import Header from '../header.js';


function makeTemplate() {
    return html`
    <header></header>
    <div id="form"></div>
    `;
}

export default class SoundSelectApp {
    render() {
        const dom = makeTemplate();

        const userForm = dom.getElementById('form');

        const headerSection = dom.querySelector('header');

        const form = new SoundSelectForm();

        const header = new Header();

        userForm.appendChild(form.render());

        headerSection.appendChild(header.render());

        return dom;
    }
}





