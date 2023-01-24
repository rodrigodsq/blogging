import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Posts, UserDetails } from './user.model';

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
    public sliderItems: Array<Array<Posts>> = [[]];
    public sliderIndex: number = 0;

    @Input()
    public set userDetails(value: UserDetails)
    {
        if(!value)
        {
            return;
        }

        this.user = value;
        this.show = true;
        this.initSlider(value.posts);
    }

    public initSlider(value: Array<Posts>): void
    {
        let count: number = 0;

        value.forEach((post) => {
            if(this.sliderItems[count].length < 3)
            {
                this.sliderItems[count].push(post);
                return
            }
            count = count +1;
            this.sliderItems.push([])
            this.sliderItems[count].push(post);
        });
    }

    public changeSlider(isMore: boolean): void
    {
        if( isMore && this.sliderIndex < (this.sliderItems.length - 1))
        {
            this.sliderIndex = this.sliderIndex + 1;
        }

        if( !isMore && this.sliderIndex > 0)
        {
            this.sliderIndex = this.sliderIndex - 1;
        }
    }


    public toggle () {
        this.show = !this.show;

        if(!this.show)
        {
            this.sliderIndex = 0;
            this.sliderItems = [[]];
        }
    }
}
