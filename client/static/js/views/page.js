import Base from './base.js';

export class Page extends Base {

    constructor() {
        super('Page')
    }

    static name = "page-element"
    static selector = `<${this.name}></${this.name}>`

};
customElements.define(Page.name, Page)