import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProfileService } from './profile.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        ProfileService
    ]
})
export class ServicesModule
{ }
