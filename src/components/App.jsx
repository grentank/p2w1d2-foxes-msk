import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import NavBar from './NavBar';
import OnePostPage from './OnePostPage';
import PostsPage from './PostsPage';

export default function App({ allPosts, onePost }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <NavBar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage allPosts={allPosts} />} />
        <Route path="/posts/:id" element={<OnePostPage onePost={onePost} />} />
      </Routes>
    </div>
  );
}
