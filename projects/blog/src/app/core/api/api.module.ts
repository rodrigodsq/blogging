import { NgModule } from '@angular/core';
import { PostHomeApi } from './post-home.api';
import { ProfileApi } from './profile.api';

@NgModule({
    providers: [
        ProfileApi,
        PostHomeApi
    ]
})
export class ApiModule
{ }
