
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User, usersMock } from '../models/users';

@Injectable()
export class ProfileService
{
    constructor(
        private readonly http: HttpClient
    )
    { }

    public login(id: number): Observable<User | undefined>
    {
        return of(usersMock.find(user => user.id === id)).pipe(delay(3000));
    }
}
