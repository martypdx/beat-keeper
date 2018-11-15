import html from '../helper/html.js';
import Header from '../header.js';

var data = JSON.parse(localStorage.getItem('userSettings'));

function makeTemplate() {
    return html`
    <header></header>
    <!--<button type="button" onclick="javascript:history.back()">Back</button>-->
    <!--<a href="javascript:history.back()">Go Back</a>-->
    `;
}


//WE HAVE 3 FUNCTIONS DOING SAME THING!! CREATE A CLASS?
function playSample1() {
    var x = document.createElement('AUDIO');
    x.setAttribute('src', 'assets/kick-drum.mp3');
    x.setAttribute('controls', 'controls');
    x.setAttribute('autoplay', 'autoplay');
    x.setAttribute('loop', 'loop');
    // x.setAttribute('hidden', 'hidden');
    document.body.appendChild(x);
    var image = document.createElement('IMG');
    image.setAttribute('src', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
    document.body.appendChild(image);
}
function playSample2() {
    var x = document.createElement('AUDIO');
    x.setAttribute('src', 'assets/snare-drum.mp3');
    x.setAttribute('controls', 'controls');
    x.setAttribute('autoplay', 'autoplay');
    x.setAttribute('loop', 'loop');
    // x.setAttribute('hidden', 'hidden');
    document.body.appendChild(x);
    var image = document.createElement('IMG');
    image.setAttribute('src', 'assets/pizzacat.gif');
    document.body.appendChild(image);
}
function playSample3() {
    var x = document.createElement('AUDIO');
    x.setAttribute('src', 'assets/percussion.mp3');
    x.setAttribute('controls', 'controls');
    x.setAttribute('autoplay', 'autoplay');
    x.setAttribute('loop', 'loop');
    // x.setAttribute('hidden', 'hidden');
    document.body.appendChild(x);
    var image = document.createElement('IMG');
    image.setAttribute('src', 'assets/userprofile.gif');
    document.body.appendChild(image);
}


export default class SongResultApp {
    render() {
     

        let value;
        // if(data.sample1 === true) {
        //     // value = '../assets/200bpm-kick.mp3';
        //     // samplesApi.add(value);
        //     playSample1();
        // }
        // else if(data.sample1 !== true) {
        //     // value = '../assets/200bpm-snare.mp3';
        //     // samplesApi.add(value);
        //     playSample2();
        // }
        if(data.sample1 === true && data.sample2 === false && data.sample3 === false) {
            playSample1();
        }
        if(data.sample2 === true && data.sample1 === false && data.sample3 === false) {
            playSample2();
        }
        if(data.sample3 === true && data.sample1 === false && data.sample2 === false) {
            playSample3();
        }
        if(data.sample1 === true && data.sample3 === true && data.sample2 === false) {
            playSample1();
            playSample3();
        }
        if(data.sample1 === true && data.sample2 === true && data.sample3 === false) {
            playSample1();
            playSample2();
        }
        if(data.sample2 === true && data.sample3 === true && data.sample1 === false) {
            playSample2();
            playSample3();
        }
        if(data.sample1 && data.sample2 && data.sample3 === true) {
            playSample1();
            playSample2();
            playSample3();
        }

        const dom = makeTemplate(value);
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        return dom;
    }
}