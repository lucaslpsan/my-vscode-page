<script>
    import Folder from "./Folder.svelte";

    let root = [
        {
            type: "folder",
            name: "node_modules",
            files: [{ type: "file", name: "muita-coisa-aqui.json" }],
        },
        {
            type: "folder",
            name: "public",
            files: [
                {
                    type: "folder",
                    name: "build",
                    files: [
                        { type: "file", name: "portfolio.html" },
                        // { type: "file", name: "rope-jumping.gif" },
                    ],
                },
                {
                    type: "folder",
                    name: "static",
                    files: [
                        { type: "file", name: "parkour.gif" },
                        { type: "file", name: "files.json" },
                    ],
                },
                { type: "file", name: "index.html" },
                { type: "file", name: "projects.html" },
                { type: "file", name: "contact-me.html" },
            ],
        },
        { type: "file", name: "TODO.md" },
        { type: "file", name: "about.js" },
        { type: "file", name: "package.json" },
    ];
    let editors = [{ type: "file", name: "index.html" }];
    let outline = [{ type: "file", name: "em-obras.html" }];

    function firstTitleTree(name) {
        return `<span style="font-weight: bold">${name}</span>`;
    }
</script>

<style>
    .wrap {
        width: 16em;
        position: absolute;
        left: 4em;
        top: 2.3em;
        border-right: 1px solid #1a1c22;
        background-color: var(--color-background-parts);
        height: 94vh;
        display: flex;
        flex-direction: column;
        text-align: start;
        color: var(--color-diselect);
        padding: 0.1em 0 0 0.3em;
    }
    .wrap svg {
        width: 18px;
    }
    .special {
        color: var(--color-special-theme);
    }
    .first-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9em;
        padding: 0 1.2em;
    }
    .list {
        display: flex;
        flex-direction: column;
        gap: 0.4em;
        font-size: 0.98em;
    }
</style>

<div class="wrap">
    <div class="first-line">
        <p class="special">EXPLORER</p>
        <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--color-diselect)"><path
                d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>
    </div>
    <div class="list">
        <Folder name={firstTitleTree('OPEN EDITORS')} files={editors} />
        <Folder name={firstTitleTree('VSCODE-PAGE')} files={root} expanded />
        <Folder name={firstTitleTree('OUTLINE')} files={outline} />
    </div>
</div>
