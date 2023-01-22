import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'wui-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent
{
    @Input()
    public diameter: number = 50;
}
