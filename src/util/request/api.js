export const BASE_URL = 'https://jsonplaceholder.typicode.com/';

// View posts
export const ALL_POST_URL = 'posts';
export const ONE_POST_URL = 'posts/id';

//Users posts
export const USER_POST_URL = 'posts?userId=' ;

//Delete post
export const DEL_POST_URL = 'posts/' ;

//Update post
export const UPDATE_POST_URL = 'posts/' ;

//Comment post
export const COMMENT_URL = (id) => `posts/${id}/comments` ;