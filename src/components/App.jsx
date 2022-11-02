import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FetchPage from './FetchPage';
import InputGroup from './InputGroup';
import MainPage from './MainPage';
import NavBar from './NavBar';
import OnePostPage from './OnePostPage';
import PostsPage from './PostsPage';
import UseStatePage from './UseStatePage';

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
        <Route path="/fetch" element={<FetchPage />} />
        <Route path="/state" element={<UseStatePage />} />
        <Route path="/group" element={<InputGroup />} />
      </Routes>
    </div>
  );
}
