import html from '../helper/html.js';
import SoundSelectForm from '../apps/sound-select-form.js';


function makeTemplate() {
    return html`
    <div id="form"></div>
    `;
}



export default class SoundSelectApp {
    render() {
        const dom = makeTemplate();

        const userForm = dom.getElementById('form');

        const form = new SoundSelectForm();

        userForm.appendChild(form.render());

        return dom;
    }
}