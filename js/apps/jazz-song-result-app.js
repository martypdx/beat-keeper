import html from '../helper/html.js';
import Header from '../header.js';

var data = JSON.parse(localStorage.getItem('userSettings'));

function makeTemplate() {
    return html`
    <header></header>
    <div class="result-buttons">
    <button id="play">Play</button>
    <button type="button" onclick="javascript:history.back()">Back</button>
    </div>
    `;
}

export function playSample(audio, gif) {
    var x = document.createElement('AUDIO');
    x.setAttribute('src', audio);
    x.setAttribute('controls', 'controls');
    x.setAttribute('autoplay', 'autoplay');
    x.setAttribute('loop', 'loop');
    x.setAttribute('hidden', 'hidden');
    document.body.appendChild(x);
    var image = document.createElement('IMG');
    image.setAttribute('src', gif);
    image.classList.add('song-results-img');
    document.body.appendChild(image);
}

export default class JazzSongResultApp {
    render() {
        const dom = makeTemplate();

        dom.querySelector('#play').addEventListener('click', function() {
            if(data.sample10 === true && data.sample11 === false && data.sample12 === false) {
            //sample10, just the kick
                playSample('assets/newjazz-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            }
            if(data.sample11 === true && data.sample10 === false && data.sample12 === false) {
            //sample11, just the snare
                playSample('assets/newjazz-snare.mp3', 'assets/pizzacat.gif');
            }
            if(data.sample12 === true && data.sample10 === false && data.sample11 === false) {
            //sample12, just the percussion
                playSample('assets/newjazz-percussion.mp3', 'assets/userprofile.gif');
            }
            if(data.sample10 === true && data.sample12 === true && data.sample11 === false) {
            //sample10, the kick
                playSample('assets/newjazz-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample12, jazz-percussion
                playSample('assets/newjazz-percussion.mp3', 'assets/userprofile.gif');
            }
            if(data.sample10 === true && data.sample11 === true && data.sample12 === false) {
            //sample10, the kick
                playSample('assets/newjazz-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample11, snare 
                playSample('assets/newjazz-snare.mp3', 'assets/pizzacat.gif');
            }
            if(data.sample11 === true && data.sample12 === true && data.sample10 === false) {
            //sample11, snare
                playSample('assets/newjazz-snare.mp3', 'assets/pizzacat.gif');
            //sample12, jazz-percussion
                playSample('assets/newjazz-percussion.mp3', 'assets/userprofile.gif');
            }
            if(data.sample10 && data.sample11 && data.sample12 === true) {
            //sample10, the kick
                playSample('assets/newjazz-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample11, snare
                playSample('assets/newjazz-snare.mp3', 'assets/pizzacat.gif');
            //sample 3, jazz-percussion
                playSample('assets/newjazz-percussion.mp3', 'assets/userprofile.gif');
            }
        });

        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        return dom;
    }
}