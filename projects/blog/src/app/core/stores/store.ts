import { Action, ActionReducerMap } from '@ngrx/store';
import { postHomeReducer } from './post-home/post-home.reducer';
import { PostHomeStore } from './post-home/post-home.store';
import { profileReducer } from './profile/profile.reducer';
import { ProfileStore } from './profile/profile.store';

/**
 * App root store.
 */
export interface AppState
{
    profile: ProfileStore;
    postHome: PostHomeStore;
}

/**
 * App root store containing all reducers.
 */
export const reducers: ActionReducerMap<object, Action> = {
    profile: profileReducer,
    postHome: postHomeReducer
};
