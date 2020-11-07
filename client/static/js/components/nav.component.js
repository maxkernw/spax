
import { navigateTo, routes } from '../router.js';

export class NavComponent extends HTMLElement {
    static name = 'nav-component'
    static selector = `<${this.name} class="${this.name}"></${this.name}>`

    constructor() {
        super();
        this.init();

    }
    init = _ => {
        this.text = this.title;

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = /*html*/`
        <style>
          ${this.style``}
        </style>
         ${this.html``}
        `;

        this.paragraph = this.shadowRoot.querySelector('p');
        this.div = this.shadowRoot.querySelector('.test');
        this.links = this.shadowRoot.querySelectorAll('a');
        this.sideNav = this.shadowRoot.getElementById("mySidenav");
        this.openNavBtn = this.shadowRoot.querySelector('.openNavBtn');
        this.closeBtn = this.shadowRoot.querySelector('.closeBtn');

        this.click = this.click.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    click = (e) => {
        e.preventDefault();
        navigateTo(e.target.href);
        this.closeNav();
    };


    style = _ => `
    nav {
        position: absolute;
        width: 100%;
        display: grid;
        min-height: 3rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        grid-template-columns: repeat(2, auto);
        align-items: center;
        justify-items: center;
        background: white;
        text-transform: uppercase;
      }
    .logo {
        justify-self: start;
        margin-left: 1rem;
        font-size: 2rem;
    }
    .links {
        display:grid;
        grid-template-columns: repeat(${routes.length}, auto);
        grid-gap: 1rem;
        justify-self: end;
        margin-right: 1rem;
        color: black;
    }
    
    a:link, a:visited {
        color:black;
        text-decoration: none;
        cursor: pointer;
    }
    a:hover {
        text-decoration: underline;
    }

    span {
        display:none;
    }
    .sidenav {
        display:none;
    }

    @media only screen and (max-width: 768px) {
        nav {
            display:grid;
            grid-template-columns: auto auto;

        }
        .logo {
        }

        .links {
            display:none;
        }
        span {
            display:block;
            justify-self: end;
            margin-right: 1rem;
        }

        .sidenav {
            height: 100%;
            display:block;
            width: 0;
            position: fixed;
            z-index: 1;
            top: 0;
            right: 0;
            background-color: #111;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 1rem;
          }
          
          .sidenav a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 15px;
            color: #818181;
            display: block;
            transition: 0.3s;
          }
          
          .sidenav a:hover {
            color: #f1f1f1;
          }
          
          .sidenav .closebtn {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 50px;
          }          
    }   

 
    `

    html = _ => /*html*/`
    <nav>
        <div class="logo">
            SPAX
        </div>
        <div class="links">
           ${routes.reduce((acc, route) => `${acc} <a href="${route.view.route}">${route.view.name}</a>`, '')}
        </div>
        <span style="font-size:30px;cursor:pointer" class="openNavBtn">&#9776;</span>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closeBtn">&times;</a>
                ${routes.reduce((acc, route) => `${acc} <a href="${route.view.route}">${route.view.name}</a>`, '')}
            </div>
    </nav>
    `

    openNav = _ => this.sideNav.style.width = "250px";


    closeNav = _ => this.sideNav.style.width = "0";

    connectedCallback() {
        for (const link of this.links) {
            link.addEventListener('click', this.click);
        }

        this.openNavBtn.addEventListener('click', this.openNav);
        this.closeBtn.addEventListener('click', this.closeNav);

    }

    disconnectedCallback() {
        for (const link of this.links) {
            link.removeEventListener('click', this.click);
        }

        this.openNavBtn.removeEventListeer('click', this.openNav);
        this.closeBtn.removeEventListener('click', this.closeNav);
    }
};
customElements.define(NavComponent.name, NavComponent)