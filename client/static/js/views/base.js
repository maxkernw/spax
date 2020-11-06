export default class extends HTMLElement {
    constructor(title) {
        super();
        this.title = title;
        this.init();
    }
    init = _ => {
        this.text = this.title;

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
          ${this.style()}
        </style>
        <div>
            ${this.html()}
        </div>
        `;

        this.paragraph = this.shadowRoot.querySelector('p');
        this.div = this.shadowRoot.querySelector('.container');
        this.click = this.click.bind(this);
    }

    click = _ => {
        const textColor = this.random();
        this.paragraph.style.color = textColor;
        this.div.style.backgroundColor = this.random();
    };

    random = _ => `#${Math.floor(Math.random() * 16777215).toString(16)}`

    style = _ => `
        p {
            color: ${this.random()};
            font-size: 200%;
            transition: all .5s;
            width: 100%;
            padding:0;
            margin: 0;
            text-transform: uppercase;
            text-decoration:${Math.random() > .5 ? 'overline' : `underline`};
            cursor: pointer;
            user-select: none;
            font-family: Gill Sans,Gill Sans MT,Calibri,sans-serif; 

        }
        .container {
            display:grid;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            transition: all .5s;
            background-color: ${this.random()}
        }
    `

    html = _ => /*html*/`
    <div class="container">
        <p>${this.text}</p>
    </div>
    <snackbar-component></snackbar-component>
    `
    connectedCallback() {
        this.paragraph.addEventListener('click', this.click);
    }

    disconnectedCallback() {
        this.paragraph.removeEventListener('click', this.click);
    }
};