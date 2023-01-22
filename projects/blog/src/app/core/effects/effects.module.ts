import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule as NGEffectsModule, EffectsRootModule } from '@ngrx/effects';

const effects: ModuleWithProviders<EffectsRootModule> = NGEffectsModule.forRoot([ ])

@NgModule({
    imports: [effects]
})
export class EffectsModule
{ }
