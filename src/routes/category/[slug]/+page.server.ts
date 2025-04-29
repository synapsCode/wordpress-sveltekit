import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({fetch, params}) => {

    const url = `https://tyskfotball.com/wp-json/custom/v1/posts?per_page=5&page=1&category=${params.slug}}` ;
    try{
        const response = await fetch(url)
        const postData = await response.json();
        console.log(url);
        return {
			posts: postData,
			// perPage: perPage,
			// page:page
		};
    }catch(e){
        return{
            posts: [],
			error: {
				message: 'Failed to fetch data'
			}
        }
    }

}