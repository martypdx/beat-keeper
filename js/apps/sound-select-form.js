import html from '../helper/html.js';
import userData from '../services/user-api.js';

function makeTemplate() {
    return html`
    <form class="select">
    <h1 class="header">Choose your sounds</h1>
        <fieldset>
            <label class="neon" for="sample1">Kick</label>
            <input required type="checkbox" name="samples" id="sample1" value="kick">
        </fieldset>
        <fieldset>
            <label class="neon" for="sample2">Snare</label>
            <input required type="checkbox" name="samples" id="sample2" value="snare">
        </fieldset>
        <fieldset>
            <label class="neon" for="sample3">Percussion</label>
            <input required type="checkbox" name="samples" id="sample3" value="percussion">
        </fieldset>
        <button type="submit" id="button-sound-select">Submit</button>
    </form>
    `;
}

export default class SoundSelectForm {
    constructor(form) {
        this.form = form;
    }
    render() {
        const dom = makeTemplate();
        const form = dom.querySelector('form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const samples = form.elements.sample;
            const data = [];
            for(let i = 0; i < samples.length; i++) {
                if(samples[i].checked) {
                    data.push(samples[i].value);
                }
            }

            // Don't need to check because html form check "required"
            
            // Normally don't compare against true or false, just test
            // if(!data.sample1 && !data.sample2 && !data.sample3){
            //     alert ('Please select at least one sample');
            // }
            // else {
            userData.add(data);
            window.location = './song-result.html';
            // }
        });
        return dom;
    }
}