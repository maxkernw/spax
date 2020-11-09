import { routes } from '../router/routes.js';

export default `
<style>
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
    </style>
    `