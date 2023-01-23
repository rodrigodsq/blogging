import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadPostHome, loadPostHomeError, loadPostHomeSuccess } from './post-home.actions';
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
);

export function postHomeReducer(
    state: Partial<PostHomeStore> = initialState,
    action: Action
): Partial<PostHomeStore>
{
    return reducer(state, action);
}
