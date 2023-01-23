import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: [ './comment.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent
{ }
