import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import azureRedis from '$lib/server/redist';

export const load: PageServerLoad = async ({ fetch, url: requestUrl }) => {

	const cacheKey = 'wordpress_endpoint_data';
	const cacheTTL = 60 * 5;

	// Extract query parameters from the request URL
	const perPage = requestUrl.searchParams.get('per_page') || '9';
	const page = requestUrl.searchParams.get('page') || '1';
	// Construct the dynamic URL with user-provided parameters
	//TODO: Add url env ask Agent
	const url = `https://tyskfotball.com/wp-json/custom/v1/posts?per_page=${perPage}&page=${page}`;

	try {
		if(azureRedis.status != 'ready'){
			console.warn('Redis nie jest gotowy, pomijam cache');
			throw new Error('redis nie jest gotowy');
		}
		//Spradź cache
		const cached = await azureRedis.get(cacheKey);
		if(cached){
			console.log('Dane pobrane z cachu Redis');
			return {
				posts: JSON.parse(cached),
				perPage: perPage,
				page:page
			};			
		}
		//Pobierz dane z wordpresa
		console.log("Pobieram dane z Wordperess");
		const response = await fetch(url);
		if(!response.ok) throw new Error('Błąd sieci');
		const data = await response.json();

		//zapisz do redis
		await azureRedis.set(cacheKey, JSON.stringify(data), 'EX', cacheTTL);
		console.log('Dane zapisane do cachu Redis');

		return {
			posts: data,
			perPage: perPage,
			page:page
		};

	} catch (error) {
		console.error('Error fetching data:', error);
		try{
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
		}catch(fetchError){
			
			return {
				posts: [],
				error: {
					message: `Failed to fetch data ${fetchError}`
				}
			};
		}
	}
};