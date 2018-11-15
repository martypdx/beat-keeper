import JazzSelectApp from '../apps/jazz-selector-app.js';

const app = new JazzSelectApp();
const root = document.getElementById('root');
root.appendChild(app.render());