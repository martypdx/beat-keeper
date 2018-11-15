import html from '../helper/html.js';
import HipHopSelectForm from '../apps/hip-hop-select-form.js';
import Header from '../header.js';


function makeTemplate() {
    return html`
    <section id="hip-hop-header"></section>
    <div id="form"></div>
    `;
}



export default class HipHopSelectApp {
    render() {
        const dom = makeTemplate();

        const userForm = dom.getElementById('form');
        
        const headerSection = dom.getElementById('hip-hop-header');

        const form = new HipHopSelectForm();
        
        const header = new Header();

        userForm.appendChild(form.render());

        headerSection.appendChild(header.render());

        return dom;
    }
}

