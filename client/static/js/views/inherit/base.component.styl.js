
export const randomColor = _ => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const style = _ => `
<style>
    p {
        color: ${randomColor``};
        font-size:100%;
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
        height:100vh;
        transition: all .5s;
        background: linear-gradient(-45deg, ${randomColor``}, ${randomColor``}, ${randomColor``}, ${randomColor``});
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>
`

