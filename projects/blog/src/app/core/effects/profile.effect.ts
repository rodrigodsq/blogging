
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProfileService } from '../service/profile.service';
import { loginUser, loginUserError, loginUserSuccess } from '../stores/profile/profile.actions';

@Injectable()
export class ProfileEffect
{
    loginUser$ = createEffect(() => this.actions$.pipe(
        ofType(loginUser),
        switchMap(({ id }) => this.profileService$.login(id)),
        map((user) =>
            user ? loginUserSuccess({user}) : loginUserError({message: 'Login invalido, verifique suas credenciais!'})
        ),
        catchError(() =>
            of(loginUserError({message: 'Tente novamente em alguns instantes!'}))
        )
    ));

    constructor(
        private readonly actions$: Actions,
        private readonly profileService$: ProfileService
    )
    { }
}
