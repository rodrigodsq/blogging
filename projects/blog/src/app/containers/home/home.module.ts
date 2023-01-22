import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonlibModule } from 'commonlib';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CommonlibModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule
{ }
