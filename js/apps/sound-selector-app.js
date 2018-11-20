import html from '../helper/html.js';
import Header from '../header.js';
import SoundSelectForm from '../apps/sound-select-form.js';

function makeTemplate() {
    return html`
        <header></header>
        <div></div>
    `;
}

export default class SoundSelectApp {
    render() {
        const dom = makeTemplate();

        const headerSection = dom.querySelector('header');
        const userForm = dom.querySelector('div');

        const header = new Header();
        const form = new SoundSelectForm();

        headerSection.appendChild(header.render());
        userForm.appendChild(form.render());

        return dom;
    }
}





