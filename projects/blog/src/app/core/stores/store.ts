import { Action, ActionReducerMap } from '@ngrx/store';
import { profileReducer } from './profile/profile.reducer';
import { ProfileStore } from './profile/profile.store';

/**
 * App root store.
 */
export interface AppState
{
    profile: ProfileStore
}

/**
 * App root store containing all reducers.
 */
export const reducers: ActionReducerMap<object, Action> = {
    profile: profileReducer
};
