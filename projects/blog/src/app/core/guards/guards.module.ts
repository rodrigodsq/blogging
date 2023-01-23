import { NgModule } from '@angular/core';
import { SessionGuard } from './session.guard';

@NgModule({
    providers: [
        SessionGuard
    ]
})
export class GuardsModule
{ }
