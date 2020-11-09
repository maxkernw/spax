export class Grid extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.number = 1;
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

    }
    static name = 'grid-element'
    static selector = `<${this.name} class="${this.name}"></${this.name}>`
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
        grid-template-columns: repeat( auto-fit, minmax(125px, 1fr) );
    }
`

    html = _ => /*html*/`
    <div class="container">

        <input min="0" max="12" value="0" type="range"></input>
        <div class="grid-container"></div>
    </div>
`
    range = e => {
        console.log(e.target.value)
        this.gridContainer.innerHTML = '';
        this.number = e.target.value;
        // this.gridContainer.style.gridTemplateColumns = `repeat(${this.number}, auto)`
        for(let x = 0; x < e.target.value; x++) {
            

            this.gridContainer.innerHTML = this.gridContainer.innerHTML + `<div style="box-shadow:-3px 1px 10px #0000005e;"><random-element></random-element></div>`
        } 
    }

    connectedCallback() {
        this.inputRange.addEventListener('input', this.range);
    }

    disconnectedCallback() {
        this.inputRange.removeEventListener('input', this.range);
    }
};
customElements.define(Grid.name, Grid)