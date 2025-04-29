import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import {AZURE_REDIS_HOST} from '$env/static/private';

export const load: PageServerLoad = async ({ fetch, url: requestUrl }) => {
	// Extract query parameters from the request URL
	const perPage = requestUrl.searchParams.get('per_page') || '9';
	const page = requestUrl.searchParams.get('page') || '1';
	console.log("env zmienna =>", AZURE_REDIS_HOST);
	// Construct the dynamic URL with user-provided parameters
	//TODO: Add url env ask Agent
	const url = `https://tyskfotball.com/wp-json/custom/v1/posts?per_page=${perPage}&page=${page}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await response.json();
		return {
			posts: data,
			perPage: perPage,
			page:page
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