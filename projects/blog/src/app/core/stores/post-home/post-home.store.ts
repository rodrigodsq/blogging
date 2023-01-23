import { PostHome } from '../../models/post-home';

export const storeTag: string = '[PostHome Store]';

export interface PostHomeStore
{
    postHome: PostHome;
    loading: boolean;
    error: string;
}
