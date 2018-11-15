import html from '../helper/html.js';
import userData from '../services/user-api.js';

function makeTemplate() {
    return html`
    <form id="hip-hop-select-form">
    <h1 id = "header">Choose your sounds</h1>
        <fieldset id="sample4-fieldset">
            <label class="neon" for="sample4">Kick</label>
            <input type="checkbox" name="sample4" id="sample4">
        </fieldset>
        <fieldset id="sample5-fieldset">
            <label class="neon" for="sample5">Snare</label>
            <input type="checkbox" name="sample5" id="sample5">
        </fieldset>
        <fieldset id="sample6-fieldset">
            <label class="neon" for="sample6">Percussion</label>
            <input type="checkbox" name="sample6" id="sample6">
        </fieldset>
        <button type="submit" id="button-sound-select">Submit</button>
    </form>
    `;
}

export default class HipHopSelectForm {
    constructor(form) {
        this.form = form;
    }
    render() {
        const dom = makeTemplate();
        const form = dom.getElementById('hip-hop-select-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // submit++;
            const elements = form.elements;
            const data = {
                sample4: elements.sample4.checked,
                sample5: elements.sample5.checked,
                sample6: elements.sample6.checked
            };
            if(data.sample4 === false && data.sample5 === false && data.sample6 === false){
                alert ('Please select at least one');
            }
            else {
                userData.add(data);

                window.location = './hip-hop-song-result.html';
            }

        });
        return dom;
    }
}