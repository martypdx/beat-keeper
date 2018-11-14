import html from '../helper/html.js';
import samplesApi from '../services/samples-api.js';


var data = JSON.parse(localStorage.getItem('userSettings'));
// console.log(data.sample1);
// console.log(data);

const value = samplesApi.getAll();
console.log(value);


function makeTemplate(value) {
    return html`
    <nav>
        <div>
            <a href="./index.html">Home</a>
        </div>
        <div>
            <a href="./about-us.html">About The Devs</a>
        </div>
    </nav>
    <audio controls>
        <source src=${value} type="audio/mpeg">
        Your browser does not support the audio tag.
    </audio>
        <!--<audio controls loop autoplay hidden>
            <source src="./assets/kick-drum.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>-->
        <!--<audio controls>
            <source src="./assets/snare-drum.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>-->
        <!--<audio controls>
            <source src="./assets/percussion.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>-->
    `;
}



export default class SongResultApp {
    // constructor(sample) {
    //     this.sample = sample;
    // }
    render() {
        const dom = makeTemplate();
        // const mp3array = [];
        
        if(data.sample1 === true) {
            // console.log('true');
            // console.log(data.sample1); // true or false
            const value = '../assets/kick-drum.mp3';
            samplesApi.add(value);
            // dom.appendChild(value);
        }
        else {
            console.log('false');
        }

        return dom;
    }
}