import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (request) => {
	const getData = async (url) => {
		try {
			const res = await fetch(url.replace('{user}', request.params.name));
			const json = await res.json();

			return json;
		} catch (ex) {
			console.error(`Error when fetching ${url.replace('{user}', request.params.name)}: ${ex}`);

			return {
				error: 'FetchError',
				exception: ex.toString()
			};
		}
	};

	const userData = await getData(`https://api.scratch.mit.edu/users/{user}`);
	const signatureHistory = await getData(
		`https://scratchdb.lefty.one/v3/forum/user/history/{user}`
	);
	const forumData = await getData(`https://scratchdb.lefty.one/v3/forum/user/info/{user}`);

	return {
		status: 200,
		body: {
			userData,
			signatureHistory,
			forumData
		}
	};
};
