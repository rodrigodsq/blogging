export interface User
{
    id: number;
    username: string;
    avatar: string;
    memberSince: string;
    friendIds: Array<number>;
    posts: Array<Posts>;
}

export interface Posts
{
    id: number;
    title: string;
    subtitle: string;
    content: string;
}

export interface UserDetails extends User
{
    mutualFriends: Array<User>;
}
