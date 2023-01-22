import { NgModule, Type } from '@angular/core';
import { SpinnerModule } from './spinner';

const commonModules: Array<Type<any>> = [
    SpinnerModule
];

@NgModule({
  imports: commonModules,
  exports: commonModules
})
export class ComponentsModule
{ }
