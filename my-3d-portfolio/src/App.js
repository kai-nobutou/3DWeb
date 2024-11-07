import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // ここにインポートを追加
import Home from './components/home/Home';
import BlogDetail from './components/Blog/BlogDetail';
import Profile from './components/common/Profile';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  const [blogs, setBlogs] = useState([]); 
  useEffect(() => {
    axios.get('http://localhost:1337/api/blog-posts') 
      .then(response => {
        console.log("Raw response data:", response.data); 
        const fetchedBlogs = response.data.data.map(blog => ({
          id: String(blog.id),
          title: blog.Title,
          content: blog.Content,
          author: blog.Author,
          published: blog.Published,
          createdAt: blog.createdAt,
          updatedAt: blog.updatedAt,
        }));
        console.log("Fetched Blogs:", fetchedBlogs);
        setBlogs(fetchedBlogs);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>f
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogDetail blogs={blogs} />} />
      </Routes>
    </Router>
  );
}

export default App;