import Base from './base.js';
export class Dashboard extends Base {

    constructor() {
        super('Dashboard');
    }
    static name = 'dashboard-element'
    static selector = `<${this.name} class="${this.name}"></${this.name}>`
    static route = '/'
};
customElements.define(Dashboard.name, Dashboard)