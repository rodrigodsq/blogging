import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule as NGEffectsModule, EffectsRootModule } from '@ngrx/effects';
import { PostHomeEffect } from './post-home.effect';
import { ProfileEffect } from './profile.effect';

const effects: ModuleWithProviders<EffectsRootModule> = NGEffectsModule.forRoot([
    ProfileEffect,
    PostHomeEffect
])

@NgModule({
    imports: [effects]
})
export class EffectsModule
{ }
