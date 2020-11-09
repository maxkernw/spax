import { NavComponent } from './components/nav.component.js';

import { Random } from './views/inherit/random.js';
import { Dashboard } from './views/inherit/dashboard.js';
import { Page } from './views/inherit/page.js';

import { Grid } from './views/grid.js';

export const registerElements = _ => {
    customElements.define(NavComponent.name, NavComponent);
    customElements.define(Random.name, Random);
    customElements.define(Page.name, Page)
    customElements.define(Grid.name, Grid)
    customElements.define(Dashboard.name, Dashboard)
}