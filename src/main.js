import App from './App.svelte';

const app = new App({
	target: document.body,
	intro: true,
	props: {
		name: 'world',
		version: '0.9 - 29/10/2020'
	}
});

export default app;