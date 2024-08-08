import { IComment } from '@/models/comments.interface';
import { FC } from 'react';
import styles from './CommentComponent.module.css'
import Link from 'next/link';

interface IProps {
   comment: IComment
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div className={styles.comment_card}>
           <h2><Link href={{pathname: '/comments/' + comment.id, query: {data: JSON.stringify(comment)}}}>{comment.id}. {comment.name}</Link></h2>
        </div>
    );
};

export default CommentComponent;