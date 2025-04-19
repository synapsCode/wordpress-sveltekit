import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { ApiResponse } from '$lib/models/api-response';

export const load: PageServerLoad = async ({ fetch, url: requestUrl }) => {
	// Extract query parameters from the request URL
	const perPage = requestUrl.searchParams.get('per_page') || '5';
	const page = requestUrl.searchParams.get('page') || '1';

	// Construct the dynamic URL with user-provided parameters
	const url = `https://tyskfotball.com/wp-json/custom/v1/posts?per_page=${perPage}&page=${page}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await response.json();
		console.log('Data fetched successfully:', data);
		return {
			posts: data
		};
	} catch {
		console.error('Error fetching data:', error);
		return {
			posts: [],
			error: {
				message: 'Failed to fetch data'
			}
		};
	}
};