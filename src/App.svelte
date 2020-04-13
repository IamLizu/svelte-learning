<script>
	import Icon from 'svelte-awesome';
	import { github, twitter } from 'svelte-awesome/icons';
	export let name, position, location, blogurl, githubHandle, email, twitterHandle;
</script>

<main>
	<img 
		id="intro-image" 
		src="./lee-cartoon.png" 
		alt="Lee"
	>
	<h1 id="intro">
		Hi, I am {name} <br>
		{position} <br>
		based in {location}.
	</h1>
	<p id="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe vitae hic molestiae impedit perferendis quia praesentium pariatur. Repellendus at beatae molestiae porro fugiat laudantium nesciunt voluptates saepe quisquam eligendi.</p>
	<p>Check out my <a href="{blogurl}">articles</a> and projects at <a href="https://github.com/{githubHandle}">GitHub</a>.</p>
	<p>Reach me at <a href="mailto:{email}">{email}</a></p>
	<p>
		<a href="https://twitter.com/{twitterHandle}"><Icon data={twitter} style="border: 0.5px solid #5A5651; border-radius: 50%; padding: 7px 8px"/></a>
		<a href="https://github.com/{githubHandle}"><Icon data={github} style="border: 0.5px solid #5A5651; border-radius: 50%; padding: 7px 8px"/></a>
	</p>
</main>

<style>
	main {
		margin: 3% 17%;
	}
	#intro-image {
		height: 130px;
		border-radius: 50%;
	}
	#intro {
		font-size: 3rem;
		font-weight: 350;
	}
	#desc {
		font-weight: 420;
	}
</style>