import AboutApp from '../apps/about-us-app.js';

const app = new AboutApp();
const header = document.getElementById('header');
header.appendChild(app.render());