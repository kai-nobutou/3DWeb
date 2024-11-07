import React, { useEffect } from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
    useEffect(() => {
        console.log("Blogs prop in BlogList:", blogs); 
    }, [blogs]);

    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default BlogList;