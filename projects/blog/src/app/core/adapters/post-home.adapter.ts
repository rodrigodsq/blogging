import { Comment, CommentTree, RawPost } from '../models/post-home';

export class PostHomeAdapter
{
    public commentTree: Array<CommentTree> = [];
    public rawPost: RawPost;

    constructor(rawPost: RawPost)
    {
        this.rawPost = rawPost;

        while(this.rawPost.comments.length)
        {
            this.rawPost.comments.forEach((value, i) =>
            {
                this.convertTree(value, i)
            })
        }
    }

    /**
     * method that starts assembling the data tree based on the comments passed,
     * the first ones that do not have "respondsTo" are added to the first layer of the tree,
     * the others are checked if they correspond to those of the first layer or are passed
     * to the recursive method until finding your combination.
     * Any comment that matches your combination is removed from the rawPost property
     *
     * @param comment comments coming from the rawPost property
     * @param i comment index in rawPost property
     */
    public convertTree(comment: Comment, i: number): void
    {
        if (comment.respondsTo === null)
        {
            this.commentTree.push({ ...comment, response: [] });
            this.rawPost.comments.splice(i, 1)
            return
        }

        this.commentTree = this.commentTree.map((value) =>
        {
            if (value.id === comment.respondsTo?.id)
            {
                this.rawPost.comments.splice(i, 1);
                value.response.push({ ...comment, response: [] });
                return value;
            }

            return this.verifyResponses(value, comment, i);
        })
    }

    /**
     * Recursive method to check if the comments passed by parameter match any already
     * added to the tree and remove it from the list if it does
     *
     * @param itemResponse Parameter that will be checked the response.
     * @param comment Comment to be placed
     * @param commentIndex Comment that will be removed so as not to be checked again
     */
    public verifyResponses(itemResponse: CommentTree, comment: Comment, commentIndex: number): CommentTree
    {
        if (!itemResponse.response.length)
        {
            return itemResponse;
        }

        let isCombinate: boolean = false;

        const localResponse: Array<CommentTree> = itemResponse.response.map(value =>
        {
            if (value.id === comment.respondsTo?.id)
            {
                isCombinate = true;
                value.response.push({ ...comment, response: [] })
                return value;
            }
            return value;
        });

        if (isCombinate)
        {
            this.rawPost.comments.splice(commentIndex, 1);
            return {
                ...itemResponse,
                response: localResponse
            };
        }

        return {
            ...itemResponse,
            response: itemResponse.response.map(value => this.verifyResponses(value, comment, commentIndex))
        }
    }
}
