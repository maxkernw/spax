
import { routes } from '../router/routes.js';

export default /*html*/`
<nav>
    <div class='logo'>
        SPAX
    </div>
    <div class='links'>
       ${routes.reduce((acc, route) => `${acc} <a href='${route.view.route}'>${route.view.name}</a>`, '')}
    </div>
    <span style='font-size:30px;cursor:pointer' class='openNavBtn'>&#9776;</span>
        <div id='mySidenav' class='sidenav'>
            <a href='javascript:void(0)' class='closeBtn'>&times;</a>
            ${routes.reduce((acc, route) => `${acc} <a href='${route.view.route}'>${route.view.name}</a>`, '')}
        </div>
</nav>
`