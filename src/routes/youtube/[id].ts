import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	return {
		status: 301,
		headers: {
			Location: `https://scratch.mit.edu/discuss/youtube/${params.id}`
		}
	};
};
