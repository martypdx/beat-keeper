import StartApp from '../apps/start-app.js';

const app = new StartApp();
const root = document.getElementById('root');
root.appendChild(app.render());