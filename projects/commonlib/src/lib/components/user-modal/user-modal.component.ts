import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserDetails } from './user.model';

@Component({
    selector: 'wui-user-modal',
    templateUrl: './user-modal.component.html',
    styleUrls: [ './user-modal.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserModalComponent
{
    public show: boolean = false;
    public user: UserDetails;

    @Input()
    public set userDetails(value: UserDetails)
    {
        if(!value)
        {
            return;
        }

        this.user = value;
        this.show = true;
    }


    public toggle () {
        this.show = !this.show;
    }
}
