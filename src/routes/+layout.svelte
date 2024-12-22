<script lang="ts">
</script>

<slot />

<svelte:head>
	<link rel="stylesheet" href="/src/lib/styles.css" />
	<link
		rel="stylesheet"
		href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark-dimmed.min.css"
	/><script
		src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"
	></script><script
		src="//cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.7.0/highlightjs-line-numbers.min.js"
	></script><script>
		hljs.initHighlightingOnLoad();
	</script><script>
		hljs.initLineNumbersOnLoad();
		$(document).ready(function () {
			$('code.hljs').each(function (i, block) {
				hljs.lineNumbersBlock(block);
			});
		});
	</script>
</svelte:head>
