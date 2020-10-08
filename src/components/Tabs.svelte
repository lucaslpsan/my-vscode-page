<script>
    import File from "./File.svelte";
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
</style>

<div class="wrap">
    <div class="tab">
        <File name="Me.svelte" tab={true} />
    </div>
    <div class="tab">
        <File name="App.svelte" tab={true} />
    </div>
    <div class="tab">
        <File name="about.js" tab={true} />
    </div>
</div>
