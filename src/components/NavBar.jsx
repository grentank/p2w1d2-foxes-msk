import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">BLOG</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/posts">Show all</a>
            <a className="nav-link" href="/fetch">Fetch page</a>
            <a className="nav-link" href="/state">useState hook</a>
            <a className="nav-link" href="/group">Input Group</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
