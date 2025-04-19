import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { ApiResponse } from '$lib/models/api-response';


export const load: PageServerLoad = async ({ fetch }) => {
	let url ="https://tyskfotball.com/wp-json/custom/v1/posts?per_page=1&page=1";
	try{
		const response = await fetch(url);
		if(!response.ok){
			throw new Error('Failed to fetch data');
		}
		const data = await response.json();
		console.log('Data fetched successfully:', data);
		return{
			posts:data
		}
	}catch{
		console.error('Error fetching data:', error);
		return {
			posts: [],
			error: {
				message: 'Failed to fetch data'
			}
		};
	}
};