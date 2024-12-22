<script>
	export let post;
</script>

<div class="card">
	<h2>{post.title}</h2>
	<p class="description">{post.description}</p>
	<p class="date">{post.date}</p>
	<a href={`/blog/${post.slug}`} class="read-more">Read More →</a>
</div>

<style>
	.card {
		border-radius: 15px;
		padding: 20px 30px;
		transition: box-shadow 0.3s ease;
		background-color: var(--background-light);
	}

	h2 {
		line-height: 0%;
		font-size: 1.25rem;
		color: #ffffff;
	}

	p {
		color: #555;
	}

	.date {
		font-size: 0.875rem;
		color: #888;
	}

	.description {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.read-more {
		color: #ff6464;
		text-decoration: none;
		font-weight: bold;
		transition: color 0.3s ease;
	}

	.read-more:hover {
		color: #e63939;
	}
</style>
