import html from '../helper/html.js';

function makeTemplate() {
    return html`  
    <form id="sound-select-form">
    <h1>Select the Samples to add</h1>
        <fieldset id="sample1-fieldset">
            <label for="sample1">Sample 1</label>
            <input type="checkbox" name="sample1" id="sample1">
        </fieldset>
        <fieldset id="sample2-fieldset">
            <label for="sample2">Sample 2</label>
            <input type="radio" name="sample2">
        </fieldset>
        <button type="submit">Submit</button>
    </form>
    `;
}

var userSettings = JSON.parse(localStorage.getItem('userSettings')) || [];

export default class SoundSelectForm {
    constructor(form) {
        this.form = form;
    }
    render() {
        const dom = makeTemplate();
        const form = dom.getElementById('sound-select-form');
        // const fieldset1 = dom.getElementById('sample1-fieldset');
        // const fieldset2 = dom.getElementById('sample2-fieldset');
        // const checkBox = dom.querySelector('input[type=checkbox]');
        // const radio = dom.querySelector('input[type=radio]');

        // fieldset2.classList.add('hidden');

        // checkBox.addEventListener('click', function() {
        //     if(checkBox.checked) {
        //         // console.log('checked!');
        //         fieldset1.classList.add('hidden');
        //         fieldset2.classList.remove('hidden'); 
        //     } else {
        //         // console.log('unchecked!');
        //     }
        // });

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const userData = {
                sample1: elements.sample1.value,
                sample2: elements.sample2.value
            };

            userSettings.push(userData);
            localStorage.setItem('userSettings', JSON.stringify(userSettings));

            window.location = './song-result.html';

        });
        return dom;
    }
}