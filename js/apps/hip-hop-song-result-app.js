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




export default class HipHopSongResultApp {
    render() {

        let value;

        if(data.sample4 === true && data.sample5 === false && data.sample6 === false) {
            //sample4, just the kick
            playSample('assets/hiphop-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
        }
        if(data.sample5 === true && data.sample4 === false && data.sample6 === false) {
            //sample5, just the snare
            playSample('assets/hiphop-snare.mp3', 'assets/pizzacat.gif');
        }
        if(data.sample6 === true && data.sample4 === false && data.sample5 === false) {
            //sample6, just the percussion
            playSample('assets/hiphop-percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample4 === true && data.sample6 === true && data.sample5 === false) {
            //sample4, the kick
            playSample('assets/hiphop-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample6, hiphop-percussion
            playSample('assets/hiphop-percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample4 === true && data.sample5 === true && data.sample6 === false) {
            //sample4, the kick
            playSample('assets/hiphop-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample5, snare 
            playSample('assets/hiphop-snare.mp3', 'assets/pizzacat.gif');
        }
        if(data.sample5 === true && data.sample6 === true && data.sample4 === false) {
            //sample5, snare
            playSample('assets/hiphop-snare.mp3', 'assets/pizzacat.gif');
            //sample6, hiphop-percussion
            playSample('assets/hiphop-percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample4 && data.sample5 && data.sample6 === true) {
            //sample4, the kick
            playSample('assets/hiphop-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample5, snare
            playSample('assets/hiphop-snare.mp3', 'assets/pizzacat.gif');
            //sample 3, hiphop-percussion
            playSample('assets/hiphop-percussion.mp3', 'assets/userprofile.gif');
        }

        const dom = makeTemplate(value);
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        return dom;
    }
}