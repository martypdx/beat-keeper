import html from '../helper/html.js';
import userData from '../services/user-api.js';

function makeTemplate() {
    return html`  
    <form id="sound-select-form">
    <h1>Select the Samples to add</h1>
        <fieldset id="sample1-fieldset">
            <label for="sample1">Sample 1</label>
            <input type="checkbox" name="sample1" id="sample1" checked>
        </fieldset>
        <!--<fieldset id="sample2-fieldset">
            <label for="sample2">Sample 2</label>
            <input type="checkbox" name="sample2" id="sample2" value="sample2" checked >
        </fieldset>-->
        <button type="submit">Submit</button>
    </form>
    `;
}

// let submit = 0;

export default class SoundSelectForm {
    constructor(form) {
        this.form = form;
    }
    render() {
        const dom = makeTemplate();
        const form = dom.getElementById('sound-select-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // submit++;
            const elements = form.elements;
            const data = {
                sample1: elements.sample1.checked,
                // sample2: elements.sample2.checked
            };
            console.log(userData);

            userData.add(data);
            

            window.location = './song-result.html';

        });
        return dom;
    }
}