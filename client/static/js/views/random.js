import Base from './base.js';

export class Random extends Base {
    

    constructor() {
        super(Random.name);
    }
    static name = "random-element"
    static selector = `<${this.name} class="${this.name}"></${this.name}>`
    static route = '/random';

};

customElements.define(Random.name, Random);
