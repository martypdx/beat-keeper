import html from '../helper/html.js';

var data = JSON.parse(localStorage.getItem('userSettings'));
console.log(data.sample1);



    



function makeTemplate() {
    return html`
        <audio controls> <!-- loop autoplay -->
            <source src="../assets/testaudio.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
    `;
}


export default class SongResultApp {
    render() {
        const dom = makeTemplate();

        return dom;
    }
}