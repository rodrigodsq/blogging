import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PostHomeApi } from '../../core/api/post-home.api';
import { ProfileApi } from '../../core/api/profile.api';
import { NewReply, PostHome } from '../../core/models/post-home';
import { User } from '../../core/models/users';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy
{
    public loading$: Observable<boolean> = this.postHomeApi.postHomeLoading$;
    public home$: Observable<PostHome> = this.postHomeApi.postHome$;
    public userLogged: User;
    public headerHeight: string = '';
    private sub: Subscription;

    constructor(
        private readonly postHomeApi: PostHomeApi,
        private readonly profileApi: ProfileApi
    )
    { }

    public ngOnInit(): void
    {
        this.refreshHeaderHeight();
        this.postHomeApi.loadPostHome();
        this.sub = this.profileApi.userLogged$.subscribe(user =>
        {
            this.userLogged = user;
        })
    }

    public ngOnDestroy(): void
    {
        this.sub?.unsubscribe();
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

    public saveReply(reply: NewReply): void
    {
        this.postHomeApi.addCommentReply(reply, this.userLogged)
    }
}
