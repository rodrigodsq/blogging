import { User } from '../../models/users';

export const storeTag: string = '[Profile Store]';

export interface ProfileStore
{
    userLogged: User;
    usersNetwork: Array<User>;
    loading: boolean;
    error: string;
}
