<script>
    export let name;
    export let tab = false;
    $: type = name.slice(name.lastIndexOf(".") + 1);
</script>

<style>
    span {
        padding: 0 0 0 1.5em;
        background: 0 0.1em no-repeat;
        background-size: 1em 1em;
        background-position-y: bottom;
    }
    span:hover {
        color: var(--color-letter-hover);
        cursor: pointer;
    }
    .tab:hover {
        color: unset;
    }
</style>

<span style="background-image: url(./static/{type}.svg)" class:tab>{name}</span>
