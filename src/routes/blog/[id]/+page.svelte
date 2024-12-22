<script lang="ts">
	export let data: any;
</script>

<div class="post">
	<a href="/blog">← Back to blog</a>
	<h1>{data.title}</h1>
	<h2>Published: {data.date}</h2>
	<hr />
	<svelte:component this={data.content}></svelte:component>
</div>

<style>
	h1 {
		color: #ffffff;
	}

	h2 {
		line-height: 0%;
		color: #ffffff;
		font-size: 1rem;
		margin-bottom: 50px;
	}

	hr {
		border: 1px solid #ffffff;
		margin-bottom: 50px;
		width: 100%;
	}

	.post {
		width: 50%;
		margin: 100px auto;
		padding: 1.5rem 2rem;
		background: var(--background-light);
		border-radius: 15px;
		color: #ffffff;
		font-family: 'SUIT-Regular', sans-serif;
	}

	@media (max-width: 768px) {
		.post {
			width: 80%;
			margin: 10px auto;
		}
	}
</style>
