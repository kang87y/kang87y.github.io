<script lang="ts">
	const links = ['Blog', 'Skills', 'Projects', 'Donate'];
</script>

<nav>
	<ul>
		{#each links as link}
			<li><a href={link == 'Blog' ? `/blog` : `#${link.toLowerCase()}`}>{link}</a></li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		background: transparent;
		display: flex;
		justify-content: flex-end;
		padding: 2rem 3rem;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 30px;
	}

	li a {
		color: #c9d1d9;
		text-transform: uppercase;
		font-weight: bold;
		text-decoration: none;
		transition: color 0.3s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	li a:hover {
		color: var(--brand-color);
	}

	@media (max-width: 768px) {
		nav {
			justify-content: center;
		}
	}
</style>
