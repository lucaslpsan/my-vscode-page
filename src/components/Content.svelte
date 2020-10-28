<script>
    import { onMount } from "svelte";
    import { menuShown } from "../helpers/store";

    export let currentContent;

    let numLines = "";

    onMount(() => {
        for (let i = 1; i < 43; i++) {
            numLines += i + " ";
        }

        document.querySelector(".num-lines").innerHTML = numLines;
    });
</script>

<style>
    .wrap {
        background-color: #262a33;
    }
    iframe {
        position: absolute;
        left: 23em;
        width: 72vw;
        height: 90vh;
        top: 5em;
        border: none;
    }
    /* @media only screen and (max-width: 1430px) {
        iframe {
            width: 77vw;
        }
    } */
    .num-lines {
        font-family: "JetBrains Mono";
        position: absolute;
        text-align: end;
        width: 1em;
        left: 21.3em;
        top: 5.5em;
        color: #5f6167;
        user-select: none;
    }
</style>

<div
    class="wrap"
    on:click={() => {
        menuShown.close();
        console.log('teste');
    }}>
    <div class="num-lines" />

    <iframe src="./static/{currentContent}.html" title="page" />
</div>
