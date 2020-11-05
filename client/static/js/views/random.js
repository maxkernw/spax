import Base from './base.js';

export class Random extends Base {
    

    constructor() {
        super('Random');
    }
    static name = "random-element"
    static selector = `<${this.name}></${this.name}>`

};

customElements.define(Random.name, Random);
