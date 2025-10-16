export interface IPostDummy {
    posts: PostItem[];
    total: number;
    skip: number;
    limit: number;
}

export interface PostItem {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: number;
    userId: number;
}

export interface Reactions {
    likes: number;
    dislikes: number;
}
