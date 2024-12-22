export const load = async () => {
	const id = 'commit-message';
	const post = await import(`../../../lib/posts/${id}.svx`);
	const { title, date } = post.metadata;

	return {
		title,
		date,
		content: post.default
	};
};
