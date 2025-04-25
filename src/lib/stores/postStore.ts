import { writable, get } from  'svelte/store';

//TODO: czy potrzebuje reaktywnej zmiany aby pobierać posty./
export const posts = writable<any[]>([]);
export const currentPage = writable(1);
export const isLoading = writable(false);
export const hasMorePosts = writable(true);

export async function loadMorePosts(categorySlug?: string){
    
    if(get(isLoading) || !get(hasMorePosts)) return;
    isLoading.set(true);
    try{
        const url = categorySlug ?
                    `https://tyskfotball.com/wp-json/custom/v1/posts?per_page=5&page=${get(currentPage) + 1}&category=${categorySlug}}` 
                    :`https://tyskfotball.com/wp-json/custom/v1/posts?per_page=5&page=${get(currentPage) + 1}`; 
        const response = await fetch(url);
        const postData = await response.json();
        if(postData.data.posts.length === 0 ){
            hasMorePosts.set(false);
        }else{
            posts.update((posts) => [...posts, ...postData.data.posts]);
            currentPage.update((currentPage) => currentPage + 1);
        }
    }catch(error)
    {
        console.log(error);
    }finally{
        isLoading.set(false);
    }
}
