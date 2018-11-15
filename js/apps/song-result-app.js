import html from '../helper/html.js';
import Header from '../header.js';

var data = JSON.parse(localStorage.getItem('userSettings'));
console.log(data);

function makeTemplate() {
    return html`
    <header></header>
    <!--<button type="button" onclick="javascript:history.back()">Back</button>-->
    <!--<a href="javascript:history.back()">Go Back</a>-->
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




export default class SongResultApp {
    render() {
     

        let value;
    
        if(data.sample1 === true && data.sample2 === false && data.sample3 === false) {
            //sample1, just the kick
            playSample('assets/kick-drum.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
        }
        if(data.sample2 === true && data.sample1 === false && data.sample3 === false) {
            //sample2, just the snare
            playSample('assets/snare-drum.mp3', 'assets/pizzacat.gif');
        }
        if(data.sample3 === true && data.sample1 === false && data.sample2 === false) {
            //sample3, just the percussion
            playSample('assets/percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample1 === true && data.sample3 === true && data.sample2 === false) {
            //sample1, the kick
            playSample('assets/kick-drum.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample3, percussion
            playSample('assets/percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample1 === true && data.sample2 === true && data.sample3 === false) {
            //sample1, the kick
            playSample('assets/kick-drum.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample2, snare 
            playSample('assets/snare-drum.mp3', 'assets/pizzacat.gif');
        }
        if(data.sample2 === true && data.sample3 === true && data.sample1 === false) {
            //sample2, snare
            playSample('assets/snare-drum.mp3', 'assets/pizzacat.gif');
            //sample3, percussion
            playSample('assets/percussion.mp3', 'assets/userprofile.gif');
        }
        if(data.sample1 && data.sample2 && data.sample3 === true) {
            //sample1, the kick
            playSample('assets/kick-drum.mp3', 'https://media.giphy.com/media/GRyUYyyBSNvs4/giphy.gif');
            //sample2, snare
            playSample('assets/snare-drum.mp3', 'assets/pizzacat.gif');
            //sample 3, percussion
            playSample('assets/percussion.mp3', 'assets/userprofile.gif');
        }

        const dom = makeTemplate(value);
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());

        return dom;
    }
}