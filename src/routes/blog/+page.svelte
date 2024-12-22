<script lang="ts">
	import BlogCard from '../../lib/components/BlogCard.svelte';

	export let data: { posts: { title: string; date: string; description: string; slug: string }[] };
</script>

<div class="blog">
	<h1>Blog Posts</h1>
	<div class="posts">
		{#each data.posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>

<style>
	h1 {
		color: var(--brand-color);
	}

	.blog {
		padding: 2rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}
</style>
