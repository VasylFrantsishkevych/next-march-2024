import { FC } from "react";
import { IPost } from "@/models/post.interface";
import styles from './PostDetailsComponent.module.css'

interface IProps {
   postDetails: IPost
}

const PostDetailsComponent: FC<IProps> = ({postDetails}) => {
    
    return (
        <div className={styles.postDetails_card}>
         <h2>{postDetails.title}</h2>
         <div>
            <p><span>ID:</span>{postDetails.id}</p>
            <p><span>UserID:</span>{postDetails.userId}</p>
            <p>{postDetails.body}</p>
         </div>
        </div>
    );
};

export default PostDetailsComponent;