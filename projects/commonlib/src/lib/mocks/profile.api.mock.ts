import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProfileApiMock
{
    public profileLoading$: Observable<any> = of();
    public userLogged$: Observable<boolean> = of(true);
    public usersNetwork$: Observable<Array<any>> = of([]);

    public loginUser(): void
    { }
}
