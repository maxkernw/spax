
import { navigateTo, routes } from '../router.js';

export class SnackbarComponent extends HTMLElement {
  static name = 'snackbar-component'
  static selector = `<${this.name} class="${this.name}"></${this.name}>`

  constructor() {
    super();
    this.init();

  }
  init = _ => {

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = /*html*/`
        <style>
          ${this.style``}
        </style>
         ${this.html``}
        `;

    this.snackbar = this.shadowRoot.getElementById("snackbar");
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }


  style = _ => `
    /* The snackbar - position it at the bottom and in the middle of the screen */
    #snackbar {
      opacity: 0; /* Hidden by default. Visible on click */
      min-width: 250px; /* Set a default minimum width */
      margin-left: -125px; /* Divide value of min-width by 2 */
      background-color: #333; /* Black background color */
      color: #fff; /* White text color */
      text-align: center; /* Centered text */
      border-radius: 2px; /* Rounded borders */
      padding: 16px; /* Padding */
      position: fixed; /* Sit on top of the screen */
      z-index: 1; /* Add a z-index if needed */
      left: 50%; /* Center the snackbar */
      bottom: 30px; /* 30px from the bottom */
     font-family: Gill Sans,Gill Sans MT,Calibri,sans-serif; 
     text-transform: uppercase;

    }
    
    /* Show the snackbar when clicking on a button (class added with JavaScript) */
    #snackbar.show {
      opacity:1; /* Show the snackbar */
      /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
      However, delay the fade out process for 2.5 seconds */
      -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
      animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }
    
    /* Animations to fade the snackbar in and out */
    @-webkit-keyframes fadein {
      from {bottom: 0; opacity: 0;}
      to {bottom: 30px; opacity: 1;}
    }
    
    @keyframes fadein {
      from {bottom: 0; opacity: 0;}
      to {bottom: 30px; opacity: 1;}
    }
    
    @-webkit-keyframes fadeout {
      from {bottom: 30px; opacity: 1;}
      to {bottom: 0; opacity: 0;}
    }
    
    @keyframes fadeout {
      from {bottom: 30px; opacity: 1;}
      to {bottom: 0; opacity: 0;}
    }

 
    `

  html = _ => /*html*/`
    <div>
    <div id="snackbar">Click the text to change colors...</div>
    </div>
    `

  connectedCallback() {

    this.show();

  }
  show() {
    this.snackbar.className = 'show'

    setTimeout(this.hide, 3000);
  }

  hide() {
    this.snackbar.className = "";

  }
  disconnectedCallback() {

  }
};
customElements.define(SnackbarComponent.name, SnackbarComponent)