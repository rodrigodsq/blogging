import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostHomeApi } from '../../core/api/post-home.api';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit
{
    public loading$: Observable<boolean> = this.postHomeApi.postHomeLoading$;

    public headerHeight: string = '';

    constructor(
        private readonly postHomeApi: PostHomeApi
    )
    { }

    public ngOnInit(): void
    {
        this.refreshHeaderHeight();
        this.postHomeApi.loadPostHome();
    }

    @HostListener('window:resize', ['$event'])
    public onResize(): void
    {
        this.refreshHeaderHeight();
    }

    public refreshHeaderHeight(): void
    {
        this.headerHeight = `${window.innerHeight / 2}px`;
    }
}
