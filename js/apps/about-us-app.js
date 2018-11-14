import html from '../helper/html.js';

function makeTemplate() {
    return html`
    <nav>
        <div>
            <a href="./index.html">Home</a>
        </div>
        <div>
            <a href="./about-us.html">About The Devs</a>
        </div>
    </nav>
    `;
}

export default class AboutApp {
    render() {
        const dom = makeTemplate();

        return dom;
    }
}

// export default class AboutApp {                     //StartApp {
//     render() {
//         const dom = makeTemplate();

//         const aboutHead = dom.getElementById('header'); //userForm/form

//         const form = new StartForm(); //StartForm()

//         aboutHead.appendChild(form.render());  //userForm/form

//         return dom;
//     }
// }

// export default class SoundSelectApp {
//     render() {
//         const dom = makeTemplate();

//         const userForm = dom.getElementById('form');

//         const form = new SoundSelectForm();

//         userForm.appendChild(form.render());

//         return dom;
//     }
// }