import { createAction, props } from '@ngrx/store';
import { NewReply, PostHome } from '../../models/post-home';
import { User } from '../../models/users';
import { storeTag } from './post-home.store';

export const loadPostHome = createAction(
    `${storeTag} Load PostHome`
);
export const loadPostHomeSuccess = createAction(
    `${storeTag} Load PostHome Success`,
    props<{
        post: PostHome
    }>()
);
export const loadPostHomeError = createAction(
    `${storeTag} Load PostHome Error`,
    props<{
        message: string;
    }>()
);

export const addCommentReply = createAction(
    `${storeTag} Add Commentary Reply`,
    props<{
        reply: NewReply;
        userLogged: User;
    }>()
)
