const baseUrl = import.meta.env.VITE_BASE_URL;
export const postsService = async ()=> {
     await fetch(`${baseUrl}/posts`).then(res=>res.json());
}