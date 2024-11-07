import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
    console.log("Blog data in BlogCard:", blog); 
    const { id, title, content, author, published, createdAt, updatedAt } = blog; // blogオブジェクトからプロパティを展開
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.8 }
        );

        if (cardRef.current) observer.observe(cardRef.current);

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    return (
        <div ref={cardRef} className={`blog-card ${isVisible ? 'visible' : ''}`}>
            <h3>{title}</h3>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Created At:</strong> {new Date(createdAt).toLocaleDateString()}</p>
            <Link to={`/blog/${id}`}>Read More</Link>
        </div>
    );
};

export default BlogCard;