export interface RespondsTo
{
    id: number;
}

export interface Author
{
    id: number;
    username: string;
    avatar: string;
}

export interface Comment
{
    id: number;
    respondsTo: RespondsTo | null;
    author: Author;
    timestamp: string;
    content: string;
    response: Array<Comment>;
}

export interface NewReply
{
    comment: string;
    combinationId: number;
}
