
import html from '../helper/html.js';
import EdmSelectForm from '../apps/edm-select-form.js';
import Header from '../header.js';

function makeTemplate() {
    return html`
    <section id="edm-header"></section>
    <div id="form"></div>
    `;
}

export default class EdmSelectApp {
    render() {
        const dom = makeTemplate();

        const userForm = dom.getElementById('form');
        
        const headerSection = dom.getElementById('edm-header');

        const form = new EdmSelectForm();
        
        const header = new Header();

        userForm.appendChild(form.render());

        headerSection.appendChild(header.render());

        console.log(headerSection);

        return dom;
    }
}
