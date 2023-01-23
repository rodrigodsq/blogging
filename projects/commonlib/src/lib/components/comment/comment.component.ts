import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Comment } from './comment.model';

@Component({
    selector: 'wui-comment',
    templateUrl: './comment.component.html',
    styleUrls: [ './comment.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent
{
    @Input()
    public comment: Array<Comment> = [];
}
