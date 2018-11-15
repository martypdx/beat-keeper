import HipHopSelectApp from '../apps/hip-hop-selector-app.js';

const app = new HipHopSelectApp();
const root = document.getElementById('root');
root.appendChild(app.render());