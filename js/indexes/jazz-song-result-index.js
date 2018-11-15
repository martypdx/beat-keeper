import JazzSongResultApp from '../apps/jazz-song-result-app.js';

const app = new JazzSongResultApp();
const root = document.getElementById('root');
root.appendChild(app.render());