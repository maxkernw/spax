import { navigateTo, router } from './router.js';


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


