import EdmSelectApp from '../apps/edm-selector-app.js';

const app = new EdmSelectApp();
const root = document.getElementById('root');
root.appendChild(app.render());