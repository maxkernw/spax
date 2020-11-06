
import { Dashboard } from "./views/dashboard.js";
import { Page } from "./views/page.js";
import { Random } from './views/random.js';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const routes = [
    { path: Dashboard.route, view: Dashboard },
    { path: Page.route, view: Page },
    { path: Random.route, view: Random },
];

const router = async () => {
   


    const { view } = routes.find(x => location.pathname === x.view.route) || routes[0];

    const app = document.querySelector('#app')

    transition(app, view);

};
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", _ => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});

const transition = (app, view) => {
    app.style.marginLeft = '200%';
    setTimeout(() => {
        app.innerHTML = view.selector;
        app.style.marginLeft = 0;
    }, 400);
}
