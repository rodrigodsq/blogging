import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostHomeAdapter } from '../adapters/post-home.adapter';
import { mockPostHome, PostHome } from '../models/post-home';

@Injectable()
export class PostHomeService
{
    constructor(
        private readonly http: HttpClient
    )
    { }

    public getPostHome(): Observable<PostHome>
    {
        return of({
            ...mockPostHome,
            comments: new PostHomeAdapter(mockPostHome).commentTree
        }).pipe(delay(3000));
    }
}
