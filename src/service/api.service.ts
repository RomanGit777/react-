export const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getAll= async <T>(endpoint: string) => {
    const responseResult = await fetch(`${baseUrl}${endpoint}`).then((res) => res.json());
    return responseResult as T;
}