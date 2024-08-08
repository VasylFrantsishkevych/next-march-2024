import { FC } from "react";
import styles from './CommentDetailsComponent.module.css'
import { IComment } from "@/models/comments.interface";

interface IProps {
   commentDetails: IComment
}

const CommentDetailsComponent: FC<IProps> = ({commentDetails}) => {
    
    return (
        <div className={styles.commentDetails_card}>
         <h2>{commentDetails.name}</h2>
         <div>
            <p><span>ID:</span>{commentDetails.id}</p>
            <p><span>PostID:</span>{commentDetails.postId}</p>
            <p><span>Email:</span>{commentDetails.email}</p>
            <p>{commentDetails.body}</p>
         </div>
        </div>
    );
};

export default CommentDetailsComponent;