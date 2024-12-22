interface PostMetadata {
	title: string;
	date: string;
	description: string;
	slug: string;
}

export const load = async () => {
	const postFiles = import.meta.glob('../../lib/posts/*.svx');

	const posts: PostMetadata[] = await Promise.all(
		Object.entries(postFiles).map(async ([filePath, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: PostMetadata };
			const slug = filePath.split('/').pop()?.replace('.svx', '') || '';

			return {
				title: metadata.title,
				date: metadata.date,
				description: metadata.description,
				slug
			};
		})
	);

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
