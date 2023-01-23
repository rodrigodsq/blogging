import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './comment.component';

@NgModule({
    declarations: [
        CommentComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        CommentComponent
    ]
})
export class CommentModule
{ }
