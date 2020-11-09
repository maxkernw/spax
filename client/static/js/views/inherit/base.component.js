import { randomColor, style } from './base.component.styl.js';

export default class extends HTMLElement {
    constructor(title) {
        super();
        this.title = title;

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            ${style``}
            <div class='container'>
                <p>${this.title}</p>
            </div>
        `;

        this.setupSelectors();
        this.bindFunctions();
    }

    randomize = _ => {
        this.paragraph.style.color = randomColor``;
        this.container.style.background = `linear-gradient(-45deg, ${randomColor``}, ${randomColor``}, ${randomColor``}, ${randomColor``})`
        this.container.style.backgroundSize = '400% 400%';
        this.container.style.animation = `gradient ${Math.floor(Math.random() * 15)}s ease infinite`
    };

    bindFunctions() {
        this.randomize = this.randomize.bind(this);
    }

    setupSelectors() {
        this.paragraph = this.shadowRoot.querySelector('p');
        this.container = this.shadowRoot.querySelector('.container');
    }

    connectedCallback() {
        this.container.addEventListener('click', this.randomize);
    }

    disconnectedCallback() {
        this.container.removeEventListener('click', this.randomize);
    }
};