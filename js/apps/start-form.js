import html from '../helper/html.js';
import userDataApi from '../services/user-api.js';


function makeTemplate() {
    return html`
    <form id="user-form">
    <fieldset>
        <label for="username">Username:</label>
            <input type="text" name="username" required>
            <legend>
            Start:
        </legend>
            <label for="genre">Choose genre:</label>
            <select id="music-genre" name="genre" required>
                <option value="" disabled selected>Select a genre</option>
                <option value="rock">Rock</option>
                <option value="hip-hop">Hip Hop</option>
            </select>
            <button type="submit">Submit</button>
    </fieldset>
    </form>
    `;
}

export default class StartForm {
    constructor(form) {
        this.form = form;
    }
    render() {
        const dom = makeTemplate();
        const form = dom.getElementById('user-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const userData = {
                username: elements.username.value,
                genre: elements.genre.value
            };

            userDataApi.add(userData);
            window.location = './sound-selection.html';

            // form.reset();


        });
        return dom;
    }
}