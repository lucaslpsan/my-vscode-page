<script>
	export let version;
	import Sidebar from "./components/Sidebar.svelte";
	import Menu from "./components/Menu.svelte";
	import Logo from "./components/Logo.svelte";
	import TreeExplorer from "./components/TreeExplorer.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./components/Tabs.svelte";
	import Content from "./components/Content.svelte";

	let currentTab = 0;
	let contents = ["me", "app", "about"];

	let currentTabHandler = (numTab) => (currentTab = numTab);
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<Menu />
	<!-- <h1>Hello {name}!</h1>
	<p>
		Visit the
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p> -->
	<Sidebar />
	<TreeExplorer />
	<Tabs {currentTab} {currentTabHandler} />
	<Content currentContent={contents[currentTab]} />
	<Logo {version} />
	<Footer />
</main>
