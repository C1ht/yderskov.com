import { error, redirect } from '@sveltejs/kit';
import { getPost, posts } from '$lib/data/posts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
	// Posts with a `redirect` field don't get a static page of their own —
	// the actual redirect is handled by this load function during prerender.
	return posts.filter((p) => !p.redirect).map((p) => ({ slug: p.slug }));
};

export function load({ params }: Parameters<PageLoad>[0]) {
	const post = getPost(params.slug);
	if (!post) error(404, 'Ikke fundet');
	if (post.redirect) redirect(301, post.redirect);
	return { post };
}
