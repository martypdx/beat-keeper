import AboutApp from '../apps/about-us-app.js';

const app = new AboutApp();
const root = document.getElementById('root');
root.appendChild(app.render());