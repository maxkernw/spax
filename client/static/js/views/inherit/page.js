import Base from './base.component.js';

export class Page extends Base {

    constructor() {
        super('Page')
    }

    static name = 'page-element'
    static selector = `<${this.name} class='${this.name}' ></${this.name}>`
    static route = '/page'
};
