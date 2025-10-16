export interface ICommentDummy {
	total: number;
	comments: commentsItem[];
	limit: number;
	skip: number;
}

export interface commentsItem {
	id: number;
	postId: number;
	body: string;
	user: userItem;
	likes: number;
}

export interface userItem {
	fullName: string;
	id: number;
	username: string;
}

