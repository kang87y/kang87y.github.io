<script>
	export let title;
	export let description;
	export let imageUrl = 'https://via.placeholder.com/300';
	export let link = 'https://example.com';
</script>

<div class="card">
	<img src={imageUrl} alt={title} />
	<div class="card-content">
		<h2 class="card-title">{title}</h2>
		<p class="card-description">{description}</p>
		<a class="card-link" href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
	</div>
</div>

<style>
	.card {
		border: 1px solid #ddd;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s;
		margin-bottom: 20px;
		width: 300px;
	}

	.card img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	.card:hover {
		transform: translateY(-5px);
	}

	.card-content {
		padding: 16px;
	}

	.card-title {
		font-size: 1.25em;
		margin: 0;
	}

	.card-description {
		margin: 8px 0;
		color: #555;
	}

	.card-link {
		display: inline-block;
		margin-top: 8px;
		color: #007bff;
		text-decoration: none;
	}

	.card-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.card {
			width: 100%;
		}
	}
</style>
