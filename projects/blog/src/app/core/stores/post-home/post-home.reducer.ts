import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { AddComment } from '../../adapters/add-comment.adapter';
import { addCommentReply, loadPostHome, loadPostHomeError, loadPostHomeSuccess } from './post-home.actions';
import { PostHomeStore } from './post-home.store';

export const initialState: Partial<PostHomeStore> = {
    loading: true
};

const reducer: ActionReducer<Partial<PostHomeStore>, Action> = createReducer(
    initialState,
    on(loadPostHome, (state) => ({
        ...state,
        loading: true
    })),
    on(loadPostHomeSuccess, (state, action) => ({
        ...state,
        loading: false,
        postHome: action.post
    })),
    on(loadPostHomeError, (state, action) => ({
        ...state,
        loading: false,
        error: action.message
    })),
    on(addCommentReply, (state, {reply, userLogged}) => ({
        ...state,
        loading: true,
        postHome: state.postHome?.comments ? new AddComment(state.postHome, reply, userLogged).newPostHome : undefined
    })),
);

export function postHomeReducer(
    state: Partial<PostHomeStore> = initialState,
    action: Action
): Partial<PostHomeStore>
{
    return reducer(state, action);
}
