export const load = async ({ params }) => {
	const { id } = params;
	const post = await import(`../../../lib/posts/${id}.svx`);
	const { title, date } = post.metadata;

	return {
		title,
		date,
		content: post.default
	};
};
