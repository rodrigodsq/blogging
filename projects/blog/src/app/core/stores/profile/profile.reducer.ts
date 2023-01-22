import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { usersMock } from '../../models/users';
import { loginUser, loginUserError, loginUserSuccess } from './profile.actions';
import { ProfileStore } from './profile.store';

export const initialState: Partial<ProfileStore> = {
    loading: true
};

const reducer: ActionReducer<Partial<ProfileStore>, Action> = createReducer(
    initialState,
    on(loginUser, (state) => ({
        ...state,
        loading: true
    })),
    on(loginUserSuccess, (state, action) => ({
        ...state,
        loading: false,
        userLogged: action.user,
        usersNetwork: usersMock.filter(user => user.id !== action.user.id)
    })),
    on(loginUserError, (state, action) => {
        alert(action.message);
        return {
            ...state,
            loading: false,
            error: action.message
        }
    })
);

export function profileReducer(
    state: Partial<ProfileStore> = initialState,
    action: Action
): Partial<ProfileStore>
{
    return reducer(state, action);
}
