<script>
    export let name;
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
    }
</style>

<span style="background-image: url(./static/{type}.svg)">{name}</span>
