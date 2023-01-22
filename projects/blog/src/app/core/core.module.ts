import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonlibModule } from 'commonlib';
import { AdaptersModule } from './adapters/adapters.module';
import { EffectsModule } from './effects/effects.module';
import { GuardsModule } from './guards/guards.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { ResolversModule } from './resolvers/resolvers.module';
import { ServicesModule } from './service/services.module';
import { StoreModule } from './stores/store.module';

@NgModule({
    imports: [
        CommonModule,
        CommonlibModule,
        ServicesModule,
        AdaptersModule,
        ResolversModule,
        GuardsModule,
        InterceptorsModule,
        EffectsModule,
        StoreModule
    ],
    exports: [ ]
})
export class CoreModule
{ }
