import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostHomeStore } from './post-home.store';

const getPostHomeState = createFeatureSelector<PostHomeStore>('postHome');

export const getPostHomeLoading = createSelector(
    getPostHomeState,
    (store: PostHomeStore) => store.loading
);

export const getPostHome = createSelector(
    getPostHomeState,
    (store: PostHomeStore) => store.postHome
);
