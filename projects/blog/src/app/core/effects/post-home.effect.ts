import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PostHomeService } from '../service/post-home.service';
import { loadPostHome, loadPostHomeError, loadPostHomeSuccess } from '../stores/post-home/post-home.actions';

@Injectable()
export class PostHomeEffect
{
    loadPostHome$ = createEffect(() => this.actions$.pipe(
        ofType(loadPostHome),
        switchMap(() => this.postHomeService$.getPostHome()),
        map((post) => loadPostHomeSuccess({post})),
        catchError(() =>
            of(loadPostHomeError({message: 'Não foi possivel carregar as postagens!'}))
        )
    ));

    constructor(
        private readonly actions$: Actions,
        private readonly postHomeService$: PostHomeService
    )
    { }
}
