// src/components/BlogDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import ThreeCanvas from '../common/TreeCavas';
import NavBar from '../common/NavBar';
import Footer from '../footer/Footer';
import LeftBox from '../common/LeftKaiBox';
import './BlogDetail.css';

const BlogDetail = ({ blogs }) => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const foundBlog = blogs.find(b => b.id === id); 
        if (foundBlog) {
            setBlog(foundBlog);
        } else {
            setBlog(null);
        }
    }, [id, blogs]);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="blog-detail-page">
            <div className="canvas-container">
                <Canvas
                    className="canvas"
                    camera={{ position: [0, 2, 5], fov: 50 }}
                    style={{ background: '#282c34' }}
                >
                    <ThreeCanvas />
                </Canvas>
            </div>

            <header className="blog-header">
                <NavBar />
                <LeftBox />
            </header>

            <div className="blog-detail">
                <h2 className='title'>{blog.title}</h2>
                <div className="content">
                    <p>{blog.content}</p>
                </div>
                <p className="author"><strong>Author:</strong> {blog.author}</p>
                <p className="date"><strong>Published:</strong> {new Date(blog.published).toLocaleDateString()}</p>
            </div>

            <Footer />
        </div>
    );
};

export default BlogDetail;