<script>
    export let showMenuX, showMenuY, menuClickHeight, optionsMenu;
    import { menuShown } from "../helpers/store";
</script>

<style>
    .teste {
        display: none;
        background-color: var(--color-context-menu);
        position: absolute;
        /* width: 250px; */
        /* height: 50px; */
        z-index: 1;
        text-align: start;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 8px 0;
    }
    .option {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 5px 20px;
        flex-wrap: wrap;
        gap: 1.5em;
    }
    li:hover {
        cursor: pointer;
        background-color: var(--color-background-parts);
        color: var(--color-special-theme);
    }
    hr {
        width: 90%;
        border: 0;
        border-top: 1px solid var(--color-context-menu-hr);
    }
    .submenu {
        background: url(.././static/chevron-right.svg) no-repeat;
        background-position: right;
        background-size: 20px;
    }
</style>

<div
    class="teste"
    style={`left: ${showMenuX}px; top: ${showMenuY + menuClickHeight}px; display: ${$menuShown === 0 ? 'none' : 'block'}`}>
    <ul>
        {#if optionsMenu}
            {#each optionsMenu.options as menu}
                {#if menu.hr}
                    <hr />
                {:else}
                    <li class="option" class:submenu={menu.submenu}>
                        <div>{menu.option}</div>
                        <div>{menu.shortkey}</div>
                    </li>
                {/if}
            {/each}
        {/if}
    </ul>
</div>
