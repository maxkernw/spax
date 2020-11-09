
import { navigateTo } from '../router/router.js';
import style from './nav.component.styl.js';
import template from './nav.component.template.js';

export class NavComponent extends HTMLElement {
    static name = 'nav-component'
    static selector = `<${this.name} class='${this.name}'></${this.name}>`

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = style + template;

        this.setupSelectors();
        this.bindFunctions();
    }

    bindFunctions() {
        this.navigate = this.navigate.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    setupSelectors() {
        this.links = this.shadowRoot.querySelectorAll('a');
        this.sideNav = this.shadowRoot.getElementById('mySidenav');
        this.openNavBtn = this.shadowRoot.querySelector('.openNavBtn');
        this.closeBtn = this.shadowRoot.querySelector('.closeBtn');
    }


    navigate = event => {
        event.preventDefault();
        navigateTo(event.target.href);
        this.closeNav();
    }

    openNav = _ => this.sideNav.style.width = '250px';
    closeNav = _ => this.sideNav.style.width = '0';

    connectedCallback() {
        for (const link of this.links) {
            link.addEventListener('click', this.navigate);
        }

        this.openNavBtn.addEventListener('click', this.openNav);
        this.closeBtn.addEventListener('click', this.closeNav);

    }

    disconnectedCallback() {
        for (const link of this.links) {
            link.removeEventListener('click', this.navigate);
        }

        this.openNavBtn.removeEventListeer('click', this.openNav);
        this.closeBtn.removeEventListener('click', this.closeNav);
    }
};
