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
            <div class="profile">
                Cari<br>Palazzolo<br>
                <img src="./assets/pizzacat.gif" id="caris" alt="">
                <p>When Cari isn't writing code, she likes to make art and music, eat pizza, and sip delicious IPAs.</p>
            </div>
            <div class="profile">
                Phoebe<br>Lablonde<br>
                <img src="https://media.giphy.com/media/X7NBev9zI0i2s/giphy.gif" id="phoebes">
                <p>When Phoebe isn’t coding, she likes to read, watch YouTube, and chill.</p>
            </div>
            <div class="profile">
                Drew<br><span class="small-name">Van Valkenburg</span><br>
                <img src="https://media.giphy.com/media/X7ETNOpE3S00L2qoBo/giphy.gif" id="drews" alt="">
                <p>When Drew isn't coding, he likes to play basketball and video games.</p>
            </div>
            <div class="profile">
                <span class="smaller-name">Christina T.</span><br>Herlocker<br>
                <img src="./assets/snoopy.gif" id="chriss" alt="">
                <p>When Chris isn't coding, she can be found reading, restoring vintage clothing, and playing video games.</p>
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
