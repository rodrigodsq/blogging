import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewReply, PostHome } from '../models/post-home';
import { User } from '../models/users';
import { addCommentReply, loadPostHome } from '../stores/post-home/post-home.actions';
import { getPostHome, getPostHomeLoading } from '../stores/post-home/post-home.selectors';
import { PostHomeStore } from '../stores/post-home/post-home.store';

@Injectable()
export class PostHomeApi
{
    public postHomeLoading$: Observable<boolean> = this.store.select(getPostHomeLoading);
    public postHome$: Observable<PostHome> = this.store.select(getPostHome);

    constructor(
        private store: Store<PostHomeStore>
    )
    { }

    public loadPostHome(): void
    {
        this.store.dispatch(loadPostHome());
    }

    public addCommentReply(
        reply: NewReply,
        userLogged: User
    ): void
    {
        this.store.dispatch(addCommentReply({
            reply,
            userLogged
        }));
    }
}
