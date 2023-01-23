import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PostHomeService } from './post-home.service';
import { ProfileService } from './profile.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        ProfileService,
        PostHomeService
    ]
})
export class ServicesModule
{ }
