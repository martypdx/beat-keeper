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

export default class EdmSongResultApp {
    render() {
        const dom = makeTemplate();

        dom.querySelector('#play').addEventListener('click', function() {
            if(data.sample7 === true && data.sample8 === false && data.sample9 === false) {
            //sample7, just the kick
                playSample('assets/newedm-kick.mp3', 'https://media.giphy.com/media/5xaOcLS7slpN30MxzpK/giphy.gif');
            }
            if(data.sample8 === true && data.sample7 === false && data.sample9 === false) {
            //sample8, just the snare
                playSample('assets/newedm-snare.mp3', 'https://media.giphy.com/media/xUOxeTDAS04N7lRrHy/giphy.gif');
            }
            if(data.sample9 === true && data.sample7 === false && data.sample8 === false) {
            //sample9, just the percussion
                playSample('assets/newedm-percussion.mp3', 'https://media.giphy.com/media/l2JId7k65ID69VE6A/giphy.gif');
            }
            if(data.sample7 === true && data.sample9 === true && data.sample8 === false) {
            //sample7, the kick
                playSample('assets/newedm-kick.mp3', 'https://media.giphy.com/media/vOmKZ9WZVheyA/giphy.gif');
            //sample9, edm-percussion
                playSample('assets/newedm-percussion.mp3', '');
            }
            if(data.sample7 === true && data.sample8 === true && data.sample9 === false) { //here
            //sample7, the kick
                playSample('assets/newedm-kick.mp3', 'https://media.giphy.com/media/7WqJm0qngTSlG/giphy.gif');
            //sample8, snare 
                playSample('assets/newedm-snare.mp3', '');
            }
            if(data.sample8 === true && data.sample9 === true && data.sample7 === false) {//dont change 
            //sample8, snare
                playSample('assets/newedm-snare.mp3', 'https://media.giphy.com/media/xThuWxxEADorYzL1Be/giphy.gif');
            //sample9, edm-percussion
                playSample('assets/newedm-percussion.mp3', '');
            }
            if(data.sample7 && data.sample8 && data.sample9 === true) {//done
            //sample7, the kick
                playSample('assets/newedm-kick.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample8, snare
                playSample('assets/newedm-snare.mp3', '');
            //sample 3, edm-percussion
                playSample('assets/newedm-percussion.mp3', '');
            }
        });
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        return dom;
    }
}