import CommentDetailsComponent from '@/components/CommentDetails/CommentDetailsComponent';
import React, { FC } from 'react';

interface IProps {
    searchParams?: {
        data?: string,

    };
}

const CommentDetailsPage: FC<IProps>  = ({searchParams}) => {
       let commentDetails;
       if (searchParams && searchParams.data) {
        commentDetails = JSON.parse(searchParams.data);
    }
    
    return (
        <div>
            <CommentDetailsComponent commentDetails={commentDetails}/>
        </div>
    );
};

export default CommentDetailsPage;