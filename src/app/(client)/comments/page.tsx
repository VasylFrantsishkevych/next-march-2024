import CommentComponent from '@/components/Comment/CommentComponent';
import { commentService } from '@/services/api.services';
import React from 'react';


const CommentsPage = async () => {

    let comments = await commentService.getAll();

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
         {
            comments.map((comment) => (<CommentComponent key={comment.id} comment={comment} />))
         }
        </div>
    );
};

export default CommentsPage;