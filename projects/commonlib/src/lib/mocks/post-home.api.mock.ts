import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PostHomeApiMock
{
    public postHomeLoading$: Observable<boolean> = of();
    public postHome$: Observable<any> = of();

    public loadPostHome(): void
    { }

    public addCommentReply(): void
    { }
}
