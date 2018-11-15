import html from '../helper/html.js';
import Header from '../header.js';


function makeTemplate() {
    return html`
    <header></header>
    <main class="head">
        <div id="about">
            <h3>about the developers</h3>
        </div>
        <div class="names">
            <div id="cari">
                Cari<br>Palazzolo<br>
                <img src="./assets/pizzacat.gif" alt="">
                <p>about</p>
            </div>
            <div id="phoebe">
                Phoebe<br>Lablonde<br>
                <img src="https://media.giphy.com/media/X7NBev9zI0i2s/giphy.gif" >
                <p>about</p>
            </div>
            <div id="drew">
                Drew<br>Van Valkenburg<br>
                <img src="./assets/userprofile.gif" alt="">
                <p>about</p>
            </div>
            <div id="chris">
                Christina<br>T. Herlocker<br>
                <img src="./assets/snoopy.gif" alt="">
                <p>about</p>
            </div>
        </div>
    </main>
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
