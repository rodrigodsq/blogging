import { NgModule, Type } from '@angular/core';
import { CommentModule } from './comment';
import { SpinnerModule } from './spinner';
import { UserModalModule } from './user-modal';

const commonModules: Array<Type<any>> = [
    SpinnerModule,
    CommentModule,
    UserModalModule
];

@NgModule({
  imports: commonModules,
  exports: commonModules
})
export class ComponentsModule
{ }
