import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule as NGEffectsModule, EffectsRootModule } from '@ngrx/effects';
import { ProfileEffect } from './profile.effect';

const effects: ModuleWithProviders<EffectsRootModule> = NGEffectsModule.forRoot([
    ProfileEffect
])

@NgModule({
    imports: [effects]
})
export class EffectsModule
{ }
