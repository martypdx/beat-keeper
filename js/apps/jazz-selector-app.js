import html from '../helper/html.js';
import JazzSelectForm from '../apps/jazz-select-form.js';
import Header from '../header.js';


function makeTemplate() {
    return html`
    <section id="jazz-header"></section>
    <div id="form"></div>
    `;
}



export default class JazzSelectApp {
    render() {
        const dom = makeTemplate();

        const userForm = dom.getElementById('form');

        const headerSection = dom.getElementById('jazz-header');

        const form = new JazzSelectForm();

        const header = new Header();

        userForm.appendChild(form.render());

        headerSection.appendChild(header.render());

        return dom;
    }
}
