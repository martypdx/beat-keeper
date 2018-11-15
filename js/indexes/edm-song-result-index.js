import EdmSongResultApp from '../apps/edm-song-result-app.js';

const app = new EdmSongResultApp();
const root = document.getElementById('root');
root.appendChild(app.render());