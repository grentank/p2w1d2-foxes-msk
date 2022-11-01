import React from 'react';

export default function MainPage() {
  return (
    <form action="/posts" method="POST">
      <div className="input-group input-group-lg mb-3">
        <span className="input-group-text" id="usernameid">Username</span>
        <input name="author" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </div>
      <div className="input-group input-group-lg mb-3">
        <span className="input-group-text" id="bodyid">Body</span>
        <input name="body" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
