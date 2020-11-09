
import { routes } from './routes.js';

export const navigateTo = url => {
    if (location.href !== url) {
        history.pushState(null, null, url);
        router();
    }
};


export const router = async () => {
    const { view } = routes.find(route => location.pathname === route.view.route) || routes[0];

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