import SongResultApp from '../apps/song-result-app.js';

const app = new SongResultApp();
const root = document.getElementById('root');
root.appendChild(app.render());