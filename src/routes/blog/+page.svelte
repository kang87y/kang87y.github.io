<script>
	import BlogCard from '../../lib/components/BlogCard.svelte';

	const posts = [
		{
			id: 'commit-message',
			title: '커밋 메시지',
			description: '커밋 메시지 작성법에 대해 알아봅시다.',
			date: '2024-12-22'
		}
	];
</script>

<div class="blog">
	<h1>Blog Posts</h1>
	<div class="posts">
		{#each posts as post}
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
