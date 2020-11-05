
import { Dashboard } from "./views/dashboard.js";
import { Page } from "./views/page.js";
import { Random } from './views/random.js';
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/page", view: Page },
        { path: "/random", view: Random },
    ];

    const potentialMatches = routes.map(route =>
        ({
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        })
    );

    const match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = match.route.view;

    document.querySelector("#app").innerHTML = view.selector;;
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});