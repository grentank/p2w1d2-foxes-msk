import React from 'react';
import PostCard from './PostCard';

export default function PostsPage({ allPosts }) {
  return (
    <div className="row">
      {allPosts.map((post) => <PostCard post={post} key={post.id} />)}
    </div>
  );
}
