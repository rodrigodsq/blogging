import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileStore } from './profile.store';

const getProfileState = createFeatureSelector<ProfileStore>('profile');

export const getProfileLoading = createSelector(
    getProfileState,
    (store: ProfileStore) => store.loading
);

export const getUserLogged = createSelector(
    getProfileState,
    (store: ProfileStore) => store.userLogged
);

export const getUsersNetwork = createSelector(
    getProfileState,
    (store: ProfileStore) => store.usersNetwork
);
