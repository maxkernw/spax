

import { Dashboard } from '../views/inherit/dashboard.js';
import { Page } from '../views/inherit/page.js';
import { Random } from '../views/inherit/random.js';
import { Grid } from '../views/grid.js';

export const routes = [
    { path: Dashboard.route, view: Dashboard },
    { path: Page.route, view: Page },
    { path: Random.route, view: Random },
    { path: Grid.route, view: Grid },
];