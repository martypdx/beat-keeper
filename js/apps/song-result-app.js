import html from '../helper/html.js';

var data = JSON.parse(localStorage.getItem('userSettings'));
console.log(data.sample1);



    



function makeTemplate() {
    return html`
    <nav>
        <div>
            <a href="./beat-keeper/index.html">Home</a>
        </div>
        <div>
            <a href="./beat-keeper/about-us.html">About The Devs</a>
        </div>
    </nav>  
        <audio controls> <!-- loop autoplay -->
            <source src="./assets/testaudio.mp3" type="audio/mpeg">
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

