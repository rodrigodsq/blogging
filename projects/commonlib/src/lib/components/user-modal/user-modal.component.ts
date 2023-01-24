import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'wui-user-modal',
    templateUrl: './user-modal.component.html',
    styleUrls: [ './user-modal.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserModalComponent
{
    public show: boolean = true;

    public toggle () {
        this.show = !this.show;
    }
}
