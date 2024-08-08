import PostComponent from '@/components/Post/PostComponent';
import { postService } from '@/services/api.services';
import React from 'react';
// import Link from "next/link";

const PostsPage = async () => {

    let posts = await postService.getAll();

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
         {
            posts.map((post) => (<PostComponent key={post.id} post={post} />))
         }
        </div>
    );
};

export default PostsPage;