import PostDetailsComponent from '@/components/PostDetails/PostDetailsComponent';
import { IPost } from '@/models/post.interface';
import React, { FC } from 'react';

interface IProps {
    searchParams?: {
        data?: string,

    };
}

const PostDetailsPage: FC<IProps> = ({searchParams}) => {
       let postDetails;
       if (searchParams && searchParams.data) {
        postDetails = JSON.parse(searchParams.data);
    }
    
    return (
        <div>
            <PostDetailsComponent postDetails={postDetails}/>
        </div>
    );
};

export default PostDetailsPage;