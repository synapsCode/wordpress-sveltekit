interface Tag {
    term_id: number;
    name: string;
    slug: string;
    term_group: number;
    term_taxonomy_id: number;
    taxonomy: string;
    description: string;
    parent: number;
    count: number;
    filter: string;
  }
  
  interface Post {
    id: number;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    author: string;
    categories: number[];
    tags: Tag[];
    comments: number;
    permalink: string;
    featured_image: string;
  }
  
  interface Pagination {
    total: number;
    pages: number;
    current_page: number;
    per_page: number;
  }
  
  interface Data {
    posts: Post[];
    pagination: Pagination;
  }
  
export interface ApiResponse {
    data: Data;
    status: string;
    message: string;
  }