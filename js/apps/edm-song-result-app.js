import html from '../helper/html.js';
import Header from '../header.js';

var data = JSON.parse(localStorage.getItem('userSettings'));
// console.log(data);

function makeTemplate() {
    return html`
    <header></header>
    `;
}


export function playSample(audio, gif) {
    var x = document.createElement('AUDIO');
    x.setAttribute('src', audio);
    x.setAttribute('controls', 'controls');
    x.setAttribute('autoplay', 'autoplay');
    x.setAttribute('loop', 'loop');
    // x.setAttribute('hidden', 'hidden');
    document.body.appendChild(x);
    var image = document.createElement('IMG');
    image.setAttribute('src', gif);
    document.body.appendChild(image);
}




export default class EdmSongResultApp {
    render() {

        let value;

        if(data.sample7 === true && data.sample8 === false && data.sample9 === false) {
            //sample7, just the kick
            playSample('assets/edm-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
        }
        if(data.sample8 === true && data.sample7 === false && data.sample9 === false) {
            //sample8, just the snare
            playSample('assets/edm-snare.mp3', 'assets/pizzacat.gif');
        }
        if(data.sample9 === true && data.sample7 === false && data.sample8 === false) {
            //sample9, just the percussion
            playSample('assets/edm-percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample7 === true && data.sample9 === true && data.sample8 === false) {
            //sample7, the kick
            playSample('assets/edm-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample9, edm-percussion
            playSample('assets/edm-percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample7 === true && data.sample8 === true && data.sample9 === false) {
            //sample7, the kick
            playSample('assets/edm-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample8, snare 
            playSample('assets/edm-snare.mp3', 'assets/pizzacat.gif');
        }
        if(data.sample8 === true && data.sample9 === true && data.sample7 === false) {
            //sample8, snare
            playSample('assets/edm-snare.mp3', 'assets/pizzacat.gif');
            //sample9, edm-percussion
            playSample('assets/edm-percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample7 && data.sample8 && data.sample9 === true) {
            //sample7, the kick
            playSample('assets/edm-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample8, snare
            playSample('assets/edm-snare.mp3', 'assets/pizzacat.gif');
            //sample 3, edm-percussion
            playSample('assets/edm-percussion.mp3', 'assets/userprofile.gif');
        }

        const dom = makeTemplate(value);
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        return dom;
    }
}