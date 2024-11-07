// src/components/comon/KaiBox.js
import React, { useState, useEffect } from 'react';
import './KaiBox.css'; 

const KaiBox = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`kai-box ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <h1>KAI BOX</h1>
            <p>This is a sample box that can appear or disappear based on scroll.</p>
        </div>
    );
};

export default KaiBox;