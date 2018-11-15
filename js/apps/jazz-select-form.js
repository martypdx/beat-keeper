import html from '../helper/html.js';
import userData from '../services/user-api.js';

function makeTemplate() {
    return html`
    <form id="jazz-select-form">
    <h1 id = "header">Choose your sounds</h1>
        <fieldset id="sample10-fieldset">
            <label class="neon" for="sample10">Kick</label>
            <input type="checkbox" name="sample10" id="sample10">
        </fieldset>
        <fieldset id="sample11-fieldset">
            <label class="neon" for="sample11">Snare</label>
            <input type="checkbox" name="sample11" id="sample11">
        </fieldset>
        <fieldset id="sample12-fieldset">
            <label class="neon" for="sample12">Percussion</label>
            <input type="checkbox" name="sample12" id="sample12">
        </fieldset>
        <button type="submit" id="button-sound-select">Submit</button>
    </form>
    `;
}

export default class JazzSelectForm {
    constructor(form) {
        this.form = form;
    }
    render() {
        const dom = makeTemplate();
        const form = dom.getElementById('jazz-select-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // submit++;
            const elements = form.elements;
            const data = {
                sample10: elements.sample10.checked,
                sample11: elements.sample11.checked,
                sample12: elements.sample12.checked
            };

            if(data.sample10 === false && data.sample11 === false && data.sample12 === false){
                alert ('Please select at least one');
            }
            else {
                userData.add(data);

                window.location = './jazz-song-result.html';
            }

        });
        return dom;
    }
}