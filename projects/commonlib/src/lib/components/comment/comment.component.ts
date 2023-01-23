import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Comment } from './comment.model';

@Component({
    selector: 'wui-comment',
    templateUrl: './comment.component.html',
    styleUrls: [ './comment.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent
{
    public showReply: boolean = false;
    public currentIndex: number = 0;
    public reply: FormControl = new FormControl('');

    @Input()
    public comment: Array<Comment> = [];

    public changeShowReply(i: number): void
    {
        this.showReply = this.currentIndex === i ? !this.showReply : true;
        this.currentIndex = i;
    }

    public saveCommentary(): void
    {
        console.log(this.reply.value);
    }
}
