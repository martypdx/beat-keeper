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

export default class HipHopSongResultApp {
    render() {
        const dom = makeTemplate();

        dom.querySelector('#play').addEventListener('click', function() {
            if(data.sample4 === true && data.sample5 === false && data.sample6 === false) {
            //sample4, just the kick
                playSample('assets/newhiphop-kick.mp3', 'https://media.giphy.com/media/RO8u908r6PsOc/giphy.gif');
            }
            if(data.sample5 === true && data.sample4 === false && data.sample6 === false) {
            //sample5, just the snare
                playSample('assets/newhiphop-snare.mp3', 'https://media.giphy.com/media/1iuaihkpi8Pnqak08u/giphy.gif');
            }
            if(data.sample6 === true && data.sample4 === false && data.sample5 === false) {
            //sample6, just the percussion
                playSample('assets/newhiphop-percussion.mp3', 'https://media.giphy.com/media/3o7WTwCjhStGCvmQjm/giphy.gif');
            }
            if(data.sample4 === true && data.sample6 === true && data.sample5 === false) {
            //sample4, the kick 
                playSample('assets/newhiphop-kick.mp3', 'https://media.giphy.com/media/dJp2CZKGEMok8/giphy.gif');
            //sample6, percussion
                playSample('assets/newhiphop-percussion.mp3', '');
            }
            if(data.sample4 === true && data.sample5 === true && data.sample6 === false) {
            //sample4, the kick
                playSample('assets/newhiphop-kick.mp3', 'https://media.giphy.com/media/kgKrO1A3JbWTK/giphy.gif');
            //sample5, snare 
                playSample('assets/newhiphop-snare.mp3', '');
            }
            if(data.sample5 === true && data.sample6 === true && data.sample4 === false) {
            //sample5, snare  here
                playSample('assets/newhiphop-snare.mp3', 'https://media.giphy.com/media/4EFCEVrJenE5SFyodH/giphy.gif');
            //sample6, percussion
                playSample('assets/newhiphop-percussion.mp3', '');
            }
            if(data.sample4 && data.sample5 && data.sample6 === true) {
            //sample4, the kick
                playSample('assets/newhiphop-kick.mp3', 'https://media.giphy.com/media/hQB6XZMkBdOq4/giphy.gif');
            //sample5, snare
                playSample('assets/newhiphop-snare.mp3', '');
            //sample 3, percussion
                playSample('assets/newhiphop-percussion.mp3', '');
            }
        });

        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        return dom;
    }
}