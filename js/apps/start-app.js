import html from '../helper/html.js';
import StartForm from '../apps/start-form.js';

function makeTemplate() {
    return html`
    <nav>
        <div>
            <a href="./beat-keeper/index.html">Home</a>
        </div>
        <div>
            <a href="./beat-keeper/about-us.html">About The Devs</a>
        </div>
    </nav>
    <div id="form">
    <!--<div>
        <img src="../../assets/speaker.jpg" class="speaker" id="speakerLeft">
        </div> 
        <div>
            <img src="../../assets/speaker.jpg" class="speaker" id="speakerRight">
        </div>-->
    </div>
    `;
}



export default class StartApp {
    render() {
        const dom = makeTemplate();

        const userForm = dom.getElementById('form');

        const form = new StartForm();

        userForm.appendChild(form.render());

        return dom;
    }
}