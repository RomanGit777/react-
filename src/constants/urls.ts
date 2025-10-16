const baseUrlForJSON = 'https://jsonplaceholder.typicode.com';
const baseUrlForDummy = 'https://dummyjson.com';

export const urls = {
    users: {
        allUsersJSON: baseUrlForJSON + '/users',
        allUsersDummy: baseUrlForDummy + '/users'
    },
    posts: {
        allPostsJSON: baseUrlForJSON + '/posts',
        allPostsDummy: baseUrlForDummy + '/posts'
    },
    comments: {
        allCommentsJSON: baseUrlForJSON + '/comments',
        allCommentsDummy: baseUrlForDummy + '/comments'
    }
}