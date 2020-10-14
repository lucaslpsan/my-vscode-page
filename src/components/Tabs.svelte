<script>
    import File from "./File.svelte";

    export let currentTab, currentTabHandler;
</script>

<style>
    .wrap {
        position: absolute;
        left: 20.5em;
        top: 3em;
        display: flex;
        flex-direction: row;
        color: var(--color-diselect);
    }
    .tab {
        width: 8em;
        /* background-color: teal; */
        padding-right: 1em;
        border-right: 1px solid #252526;
    }
    .tab:hover {
        background-image: url(".././static/close.svg");
        background-repeat: no-repeat;
        background-position: right;
        background-size: 20px;
        cursor: pointer;
    }
    .selected {
        color: var(--color-special-theme);
        background-image: url(".././static/close-special.svg");
        background-repeat: no-repeat;
        background-position: right;
        background-size: 20px;
    }
</style>

<div class="wrap">
    <div
        class="tab"
        class:selected={currentTab === 0}
        on:click={() => currentTabHandler(0)}>
        <File name="me.html" tab={true} />
    </div>
    <div
        class="tab"
        class:selected={currentTab === 1}
        on:click={() => currentTabHandler(1)}>
        <File name="App.svelte" tab={true} />
    </div>
    <div
        class="tab"
        class:selected={currentTab === 2}
        on:click={() => currentTabHandler(2)}>
        <File name="about.js" tab={true} />
    </div>
</div>
