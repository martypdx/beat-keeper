import html from '../helper/html.js';
import userData from '../services/user-api.js';

function makeTemplate() {
    return html`
    <form id="edm-select-form">
    <h1 id = "header">Choose your sounds</h1>
        <fieldset id="sample1-fieldset">
            <label class="neon" for="sample7">Kick</label>
            <input type="checkbox" name="sample7" id="sample7">
        </fieldset>
        <fieldset id="sample2-fieldset">
            <label class="neon" for="sample8">Snare</label>
            <input type="checkbox" name="sample8" id="sample8">
        </fieldset>
        <fieldset id="sample3-fieldset">
            <label class="neon" for="sample9">Percussion</label>
            <input type="checkbox" name="sample9" id="sample9">
        </fieldset>
        <button type="submit" id="button-sound-select">Submit</button>
    </form>
    `;
}

export default class EdmSelectForm {
    constructor(form) {
        this.form = form;
    }
    render() {
        const dom = makeTemplate();
        const form = dom.getElementById('edm-select-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // submit++;
            const elements = form.elements;
            const data = {
                sample7: elements.sample7.checked,
                sample8: elements.sample8.checked,
                sample9: elements.sample9.checked
            };

            if(data.sample7 === false && data.sample8 === false && data.sample9 === false){
                alert ('Please select at least one');
            }
            else {
                userData.add(data);

                window.location = './edm-song-result.html';
            }

        });
        return dom;
    }
}