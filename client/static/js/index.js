import { router } from './router/router.js';
import { registerElements } from './registry.js';

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', _ => {
    registerElements();
    router();
});


