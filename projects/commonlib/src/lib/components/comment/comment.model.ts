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
