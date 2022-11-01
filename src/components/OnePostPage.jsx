import React from 'react';

export default function OnePostPage({ onePost }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            Quote
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{onePost.body}</p>
              <footer className="blockquote-footer">
                {onePost.author}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
