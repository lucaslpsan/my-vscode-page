<style>
    .wrap {
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        /* left: 3.5em; */
        background-color: var(--color-background-parts);
        color: #cbcbcb;
        cursor: default;
    }
    .options-menu {
        display: flex;
        flex-direction: row;
    }
    .buttom {
        padding: 8px;
    }
    .buttom:hover {
        background-color: #393c43;
    }
    .logo-vscode {
        width: 20px;
        margin: auto 15px auto 10px;
    }
    .overflow {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .title {
        padding: 8px;
        position: absolute;
        left: 40vw;
    }
    @media only screen and (max-width: 1200px) {
        .title {
            right: 10em;
        }
    }
    @media only screen and (max-width: 1050px) {
        .title {
            left: initial;
            right: 10em;
            width: 34vw;
        }
        .options-menu {
            width: 42vw;
        }
    }
    @media only screen and (max-width: 900px) {
        /* .title {
            right: 10em;
            width: 35vw;
        } */
        .options-menu {
            width: 35vw;
        }
    }
    .group-buttom-os {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: absolute;
        right: 0;
        fill: #cbcbcb;
    }
    .buttom-os {
        width: 20px;
        padding: 6px 18px;
    }
    .buttom-os:hover {
        background-color: #393c43;
    }
    .buttom-os:last-child:hover {
        background-color: #d41325;
        fill: white;
    }
</style>

<div class="wrap">
    <svg
        class="logo-vscode"
        viewBox="-11.9 -2 1003.9 995.6"
        xmlns="http://www.w3.org/2000/svg"><path
            d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z"
            fill="#2489ca" />
        <path
            d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z"
            fill="#1070b3" />
        <path
            d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z"
            fill="#0877b9" />
        <path
            d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z"
            fill="#3c99d4" />
    </svg>
    <div class="options-menu overflow">
        <div class="buttom">File</div>
        <div class="buttom">Edit</div>
        <div class="buttom">Selection</div>
        <div class="buttom">View</div>
        <div class="buttom">Go</div>
        <div class="buttom">Run</div>
        <div class="buttom">Terminal</div>
        <div class="buttom">Help</div>
    </div>
    <div class="title overflow">
        index.html - lucaslpsan.dev - Visual Studio Code
    </div>
    <div class="group-buttom-os">
        <div class="buttom-os">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path
                    d="M14 8v1H3V8h11z" /></svg>
        </div>
        <div class="buttom-os">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path
                    d="M3 3v10h10V3H3zm9 9H4V4h8v8z" /></svg>
        </div>
        <div class="buttom-os">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z" /></svg>
        </div>
    </div>
</div>
