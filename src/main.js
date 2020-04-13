import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Lee',
		position: 'Front-end developer',
		location: 'Dhaka',
		blogurl: 'https://iamlizu.com/blog/',
		githubHandle: 'IamLizu',
		email: 'hasan@iamlizu.com',
		twitterHandle: 'IamLizu'
	}
});

export default app;