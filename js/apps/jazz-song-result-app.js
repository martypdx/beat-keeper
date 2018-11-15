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




export default class JazzSongResultApp {
    render() {

        let value;

        if(data.sample10 === true && data.sample11 === false && data.sample12 === false) {
            //sample10, just the kick
            playSample('assets/jazz-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
        }
        if(data.sample11 === true && data.sample10 === false && data.sample12 === false) {
            //sample11, just the snare
            playSample('assets/jazz-snare.mp3', 'assets/pizzacat.gif');
        }
        if(data.sample12 === true && data.sample10 === false && data.sample11 === false) {
            //sample12, just the percussion
            playSample('assets/jazz-percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample10 === true && data.sample12 === true && data.sample11 === false) {
            //sample10, the kick
            playSample('assets/jazz-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample12, jazz-percussion
            playSample('assets/jazz-percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample10 === true && data.sample11 === true && data.sample12 === false) {
            //sample10, the kick
            playSample('assets/jazz-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample11, snare 
            playSample('assets/jazz-snare.mp3', 'assets/pizzacat.gif');
        }
        if(data.sample11 === true && data.sample12 === true && data.sample10 === false) {
            //sample11, snare
            playSample('assets/jazz-snare.mp3', 'assets/pizzacat.gif');
            //sample12, jazz-percussion
            playSample('assets/jazz-percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample10 && data.sample11 && data.sample12 === true) {
            //sample10, the kick
            playSample('assets/jazz-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample11, snare
            playSample('assets/jazz-snare.mp3', 'assets/pizzacat.gif');
            //sample 3, jazz-percussion
            playSample('assets/jazz-percussion.mp3', 'assets/userprofile.gif');
        }

        const dom = makeTemplate(value);
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        return dom;
    }
}