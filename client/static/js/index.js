import { router } from './router.js';
import { NavComponent } from './components/nav.component.js'
import { SnackbarComponent } from './components/snackbar.component.js'

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", _ => {

    router();
});


