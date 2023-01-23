import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostHomeApi } from '../../core/api/post-home.api';
import { PostHome } from '../../core/models/post-home';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit
{
    public loading$: Observable<boolean> = this.postHomeApi.postHomeLoading$;
    public home$: Observable<PostHome> = this.postHomeApi.postHome$;

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
