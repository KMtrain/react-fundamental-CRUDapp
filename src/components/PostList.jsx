import React from 'react';
import PostItem from './PostItem';

function PostList({posts, title, remove}) {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post_info={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;
