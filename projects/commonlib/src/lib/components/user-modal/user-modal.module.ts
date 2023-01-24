import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserModalComponent } from './user-modal.component';

@NgModule({
    declarations: [
        UserModalComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UserModalComponent
    ]
})
export class UserModalModule
{ }
