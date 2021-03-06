export class Grid extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.max = 100;
        this.shadowRoot.innerHTML = `
        <style>
          ${this.style()}
        </style>
        <div>
            ${this.html()}
        </div>
        `;
        this.inputRange = this.shadowRoot.querySelector('input');
        this.gridContainer = this.shadowRoot.querySelector('.grid-container');
        this.range = this.range.bind(this);
        this.elements = this.elements.bind(this);

    }
    static name = 'grid-element'
    static selector = `<${this.name} class='${this.name}'></${this.name}>`
    static route = '/grid'

    style = _ => `
    .container {
        display:grid;
        grid-template-columns: 1fr;
        width: 100%;
        padding-top:40px;
        align-items: center;
        justify-items: center;
    }
    input {
        width:100%;
    }

    .grid-container {
        display:grid;
        width: 100%;
        height: 100vh;
        grid-gap: 1rem;
        grid-template-columns: repeat( auto-fit, minmax(120px, 1fr) );
    }
`

    html = _ => /*html*/`
    <div class='container'>

        <input min='0' max='${this.max}' value='0' type='range'></input>
        <div class='grid-container'>
            ${this.elements()}
        </div>
    </div>
`
    elements = _ => {
        let tmp = ''
        for (let x = 0; x < this.max; x++) {
            tmp += `<div class='ele-${x}' style='box-shadow:-3px 1px 10px #0000005e; display:none;'><random-element></random-element></div>`
        }
        return tmp;
    }
    range = e => {
        console.log(e.target.value)
        for (let x = 0; x < this.max; x++) {
            if (x < e.target.value) {
                this.gridContainer.querySelector(`.ele-${x}`).style.display = 'block'
            }
            else {
                this.gridContainer.querySelector(`.ele-${x}`).style.display = 'none'
            }

        }
    }

    connectedCallback() {
        this.inputRange.addEventListener('input', this.range);
    }

    disconnectedCallback() {
        this.inputRange.removeEventListener('input', this.range);
    }
};
