import { createAction, props } from '@ngrx/store';
import { User } from '../../models/users';
import { storeTag } from './profile.store';

export const loginUser = createAction(
    `${storeTag} Login User`,
    props<{
        id: number
    }>()
);
export const loginUserSuccess = createAction(
    `${storeTag} Login User Success`,
    props<{
        user: User
    }>()
);
export const loginUserError = createAction(
    `${storeTag} Login User Error`,
    props<{
        message: string;
    }>()
);
