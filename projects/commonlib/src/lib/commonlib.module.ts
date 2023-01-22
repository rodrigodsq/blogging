import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { ComponentsModule } from './components/components.module';

const commonModules: Array<Type<any>> = [
  ComponentsModule
];

@NgModule({
  imports: [...commonModules],
  exports: commonModules
})

export class CommonlibModule
{
    public static forRoot(): ModuleWithProviders<CommonlibModule>
    {
        return {
            ngModule: CommonlibModule,
            providers: [ ]
        };
    }
}
