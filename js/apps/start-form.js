import html from '../helper/html.js';
import userInfoApi from '../services/user-info-api.js';



function makeTemplate() {
    return html`
        <form>
            <label class="user-form-font" for="username">username:</label>
            <input id="username" type="text" name="username" maxLength="12" required autofocus>

            <label class="user-form-font" for="genre">genre:</label>
            <select id="music-genre" name="genre" required>
                <option value="" disabled selected>Select a genre</option>
                <option value="sound-selection">Rock</option>
                <option value="hip-hop-selection">Hip Hop</option>
                <option value="edm-selection">EDM</option>
                <option value="jazz-selection">Jazz</option>
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
        const form = dom.querySelector('form');


        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const userData = {
                username: elements.username.value,
                genre: elements.genre.value
            };

            userInfoApi.add(userData);
            // you already added this in previous line
            // localStorage.setItem('username', userData.username);

            window.location = userData.genre + '.html';


        });
        return dom;
    }
}