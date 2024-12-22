<script lang="ts">
	export let title: string;
</script>

<section class="post-section">
	<h2 class="section-title">{title}</h2>
	<slot></slot>
</section>

<style>
	.post-section {
		margin: 2rem 0;
		padding: 1.5rem;
		background-color: #6b6a6c;
		border-radius: 8px;
	}

	.section-title {
		font-size: 1.6rem;
		line-height: 0%;
	}
</style>
