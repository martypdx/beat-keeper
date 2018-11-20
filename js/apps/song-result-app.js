import html from '../helper/html.js';
import Header from '../header.js';
import userData from '../services/user-api';
import userInfo from '../services/user-info-api';

// get from service api!
// var data = JSON.parse(localStorage.getItem('userSettings'));

function makeTemplate() {
    return html`
        <header></header>
        <div class="result-buttons">
        <button id="play">Play</button>
        <button type="button" onclick="javascript:history.back()">Back</button>
        </div>
    `;
}

// there are two jobs here

export function playSample(src) {
    const audio = document.createElement('AUDIO');
    audio.setAttribute('src', src);
    audio.setAttribute('controls', 'controls');
    audio.setAttribute('autoplay', 'autoplay');
    audio.setAttribute('hidden', 'hidden');
    audio.setAttribute('loop', 'loop');
    document.body.appendChild(audio);
}

export function setImage(lookup) {
    const gif = images[lookup];
    const image = document.createElement('IMG');
    image.setAttribute('src', gif);
    image.classList.add('song-results-img');
    document.body.appendChild(image);
}

const images = {
    'kick': 'https://media.giphy.com/media/4Lyd8tJk410iI/giphy.gif',
    'snare': 'https://media.giphy.com/media/26BkMkEayiz8Ebjby/giphy.gif',
    'percussion': 'https://media.giphy.com/media/1iv69b8Yq4H8pr2Ux2/giphy.gif',
    'kicksnare': 'etc, etc',
    'kickpercussion': 'etc, etc',
    'kicksnarepercussion': 'etc, etc',
    // ...
};

export default class SongResultApp {
    render() {
        const dom = makeTemplate();

        // note that this is now an array
        const data = userData.get();

        const genre = userInfo.get().genre;

        dom.querySelector('#play').addEventListener('click', function() {
            // start the samples:
            data.forEach(sample => {
                playSample(`assets/${genre}-${sample}.mp3`);
            });
            
            // here is how you might do this more dynamically
            let lookup = data.join('');
            const image = images[lookup];
            setImage(image);
              
        });

        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        return dom;
    }
}