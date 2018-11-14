import html from '../helper/html.js';
import Header from '../header.js';

function makeTemplate() {
    return html`
    <header></header>
    `;
}

export default class AboutApp {
    render() {
        const dom = makeTemplate();

        const headerSection = dom.querySelector('header');

        const header = new Header();

        headerSection.appendChild(header.render());

        return dom;
    }
}
