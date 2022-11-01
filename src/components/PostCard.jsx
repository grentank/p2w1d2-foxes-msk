import React from 'react';

export default function PostCard({ post }) {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          {post.author}
        </div>
        <div className="card-body">
          <p className="card-text">{`${post.body.slice(0, 5)}...`}</p>
          <a href={`/posts/${post.id}`} className="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  );
}
