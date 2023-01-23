import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProfileApi } from '../api/profile.api';

@Injectable()
export class SessionGuard implements CanActivate
{
    constructor(
        private readonly profileApi: ProfileApi
    )
    { }

    public canActivate(): Observable<boolean>
    {
        return this.profileApi.userLogged$.pipe(
            map((user) => !!user )
        );
    }
}
