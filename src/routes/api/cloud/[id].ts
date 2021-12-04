import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const res = await fetch(
		`https://clouddata.scratch.mit.edu/logs?projectid=${params.id}&offset=${
			params.offset || 0
		}&limit=${params.limit || 100}`
	);
	let body;

	try {
		body = await res.json();
	} catch(ex) {
		body = []
	}

	return {
		status: 200,
		body
	};
};
