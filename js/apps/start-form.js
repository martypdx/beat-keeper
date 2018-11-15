import html from '../helper/html.js';
// import userDataApi from '../services/user-api.js';
import userInfoApi from '../services/user-info-api.js';


function makeTemplate() {
    return html`
    <form id="user-form">
    <label class="neon-label" for="username">username:</label>
    <input type="text" name="username" required>
    <label class="neon-label" for="genre">genre:</label>
            <select id="music-genre" name="genre" required>
                <option value="" disabled selected>Select a genre</option>
                <option value="sound-selection.html">Rock</option>
                <option value="hip-hop-selection.html">Hip Hop</option>
                <option value="edm-selection.html">EDM</option>
                <option value="jazz-selection.html">Jazz</option>

            </select>
            <button type="submit" id="button-start-form">Submit</button>
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

            userInfoApi.add(userData);
            localStorage.setItem('username', userData.username);

            window.location = userData.genre;


        });
        return dom;
    }
}