import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/users';
import { loginUser } from '../stores/profile/profile.actions';
import { getProfileLoading, getUserLogged, getUsersNetwork } from '../stores/profile/profile.selectors';
import { ProfileStore } from '../stores/profile/profile.store';

@Injectable()
export class ProfileApi
{
    public profileLoading$: Observable<boolean> = this.store.select(getProfileLoading);
    public userLogged$: Observable<User> = this.store.select(getUserLogged);
    public usersNetwork$: Observable<Array<User>> = this.store.select(getUsersNetwork);

    constructor(
        private store: Store<ProfileStore>
    )
    { }

    public loginUser(id: number): void
    {
        this.store.dispatch(loginUser({ id }));
    }
}
