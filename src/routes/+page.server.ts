import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';


// export const load: PageLoad = ({ params }) => {
// 	return {
// 		post: {
// 			title: `Title for ${params.slug} goes here`,
// 			content: `Content for ${params.slug} goes here`
// 		}
// 	};
// };


export const load: PageServerLoad = async ({ fetch }) => {
	let url ="https://tyskfotball.com/wp-json/custom/v1/posts?per_page=5&page=1";
	try{
		const response = await fetch(url);
		if(!response.ok){
			throw new Error('Failed to fetch data');
		}
		const data = await response.json();
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