import { NgModule, Type } from '@angular/core';

const commonModules: Array<Type<any>> = [ ];

@NgModule({
  imports: commonModules,
  exports: commonModules
})
export class ComponentsModule
{ }
