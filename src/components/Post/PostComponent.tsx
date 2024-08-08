import { FC } from 'react';
import { IPost } from '@/models/post.interface';
import styles from './PostComponent.module.css'
import Link from 'next/link';

interface IProps {
   post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div className={styles.post_card}>
           <h2><Link href={{pathname: '/posts/' + post.id, query: {data: JSON.stringify(post)}}}>{post.id}. {post.title}</Link></h2>
        </div>
    );
};

export default PostComponent;