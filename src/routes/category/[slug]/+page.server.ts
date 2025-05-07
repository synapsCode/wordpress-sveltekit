import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types'
import {CMS_DOMAIN_ADRESS} from '$env/static/private';

export const load: PageServerLoad = async ({fetch, params}) => {

    const url = `${CMS_DOMAIN_ADRESS}/wp-json/custom/v1/posts?per_page=1&page=1&category=${params.slug}}`;

    
    try{
        const response = await fetch(url)
        const postData = await response.json();
        return {
			posts: postData,
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