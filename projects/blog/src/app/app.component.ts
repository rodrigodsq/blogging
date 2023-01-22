import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileApi } from './core/api/profile.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
    public loading$: Observable<boolean> = this.profileApi.profileLoading$;

    constructor(
        private readonly profileApi: ProfileApi
    )
    { }

    public ngOnInit(): void
    {
        this.profileApi.loginUser(1);
    }
}
