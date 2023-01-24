import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Comment, NewReply } from './comment.model';

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

    @Output()
    public newReply: EventEmitter<NewReply> = new EventEmitter();

    public showReply: boolean = false;
    public currentIndex: number = 0;
    public reply: FormControl = new FormControl('', Validators.required);

    public changeShowReply(i: number): void
    {
        this.showReply = this.currentIndex === i ? !this.showReply : true;
        this.currentIndex = i;
    }

    public addReply(combinationId: number): void
    {
        if(this.reply.valid)
        {
            this.saveReply({
                comment: this.reply.value,
                combinationId
            })
        }
    }

    public saveReply(reply: NewReply): void
    {
        this.newReply.emit(reply)
        this.showReply = false;
        this.reply.setValue('');
    }

    public trackById(id: number, item: any): string
    {
        return item.id;
    }
}
