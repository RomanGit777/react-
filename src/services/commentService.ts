const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';

export const loadComments = async () => {
    return await fetch(endpointComments) .then(res => res.json());
}