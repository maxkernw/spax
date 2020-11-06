
import { Dashboard } from "./views/dashboard.js";
import { Page } from "./views/page.js";
import { Random } from './views/random.js';

export const navigateTo = url => {
    if (location.href !== url) {
        history.pushState(null, null, url);
        router();
    }
};


export const routes = [
    { path: Dashboard.route, view: Dashboard },
    { path: Page.route, view: Page },
    { path: Random.route, view: Random },
];

export const router = async () => {
    const { view } = routes.find(x => location.pathname === x.view.route) || routes[0];

    const app = document.querySelector('#app')

    transition(app, view);

};

const transition = (app, view) => {
    app.style.marginLeft = '200%';
    setTimeout(() => {
        app.innerHTML = view.selector;
        app.style.marginLeft = 0;
    }, 400);
}