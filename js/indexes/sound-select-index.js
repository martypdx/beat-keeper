import SoundSelectApp from '../apps/sound-selector-app.js';

const app = new SoundSelectApp();
const root = document.getElementById('root');
root.appendChild(app.render());