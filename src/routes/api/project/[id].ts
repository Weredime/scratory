import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const res = await fetch(`https://api.scratch.mit.edu/projects/${params.id}`);
	const body = await res.json();

	return {
		status: 200,
		body
	};
};
