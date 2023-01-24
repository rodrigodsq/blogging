import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PostHomeApi } from '../../core/api/post-home.api';
import { ProfileApi } from '../../core/api/profile.api';
import { NewReply, PostHome } from '../../core/models/post-home';
import { User, UserDetails } from '../../core/models/users';

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
    public usersNetwork: Array<User> = [];
    public userDetails: UserDetails;
    public headerHeight: string = '';
    private sub: Subscription = new Subscription();

    constructor(
        private readonly postHomeApi: PostHomeApi,
        private readonly profileApi: ProfileApi
    )
    { }

    public ngOnInit(): void
    {
        this.refreshHeaderHeight();
        this.postHomeApi.loadPostHome();

        this.sub.add(this.profileApi.userLogged$.subscribe(user =>
        {
            this.userLogged = user;
        }));

        this.sub.add(this.profileApi.usersNetwork$.subscribe(user =>
        {
            this.usersNetwork = user;
        }));
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

    public selectedUser(userId: number): void
    {
        const userSelected: User | undefined = this.usersNetwork.find( user => user.id === userId);

       if(userSelected)
       {
           const mutualFriends = this.usersNetwork.filter(user => this.userLogged.friendIds.filter(
               friendId => userSelected.friendIds.some(userId => userId === friendId)
           ).some(mutual => mutual === user.id))

           this.userDetails = {
                ...userSelected,
                mutualFriends
           }
           return;
       }

       alert('Você está selecionando seu proprio perfil!');
    }
}
