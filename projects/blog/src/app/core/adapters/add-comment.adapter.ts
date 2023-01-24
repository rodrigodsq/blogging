import { CommentTree, NewReply, PostHome } from '../models/post-home';
import { User } from '../models/users';

export class AddComment
{
    public newPostHome: PostHome;
    public reply: NewReply;
    public user: User;

    constructor(
        oldPostHome: PostHome,
        reply: NewReply,
        user: User
    )
    {
        this.reply = reply;
        this.user = user;

        this.newPostHome = {
            ...oldPostHome,
            comments: oldPostHome.comments.map((value) => this.changeCommentTree(value))
        }
    }

    /**
     * Method to add comment in post tree based on your match
     *
     * @param item parameter for verification
     */
    public changeCommentTree(item: CommentTree): CommentTree
    {
        if(item.id === this.reply.combinationId)
        {
            return {
                ...item,
                response: [
                    ...item.response,
                    {
                        id: Math.floor(Math.random() * (9999 - 1) + 1),
                        content: this.reply.comment,
                        timestamp: new Date().toISOString(),
                        respondsTo: {
                            id: item.id
                        },
                        response: [],
                        author: {
                            id: this.user.id,
                            username: this.user.username,
                            avatar: this.user.avatar
                        }
                    }
                ]
            }
        }

        return !item.response.length ?
            item :
            {
                ...item,
                response: item.response.map(value => this.changeCommentTree(value))
            };
    }
}
