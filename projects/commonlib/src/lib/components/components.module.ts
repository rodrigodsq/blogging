import { NgModule, Type } from '@angular/core';
import { CommentModule } from './comment';
import { SpinnerModule } from './spinner';

const commonModules: Array<Type<any>> = [
    SpinnerModule,
    CommentModule
];

@NgModule({
  imports: commonModules,
  exports: commonModules
})
export class ComponentsModule
{ }
