import HipHopSongResultApp from '../apps/hip-hop-song-result-app.js';

const app = new HipHopSongResultApp();
const root = document.getElementById('root');
root.appendChild(app.render());