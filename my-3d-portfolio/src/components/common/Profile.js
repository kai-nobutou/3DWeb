// src/components/Profile.js
import React, { useState, useEffect, useRef } from 'react';
import './Profile.css';


const Profile = () => {
    const [isVisible, setIsVisible] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.5);
            },
            {
                threshold: 0.5
            }
        );

        if (profileRef.current) {
            observer.observe(profileRef.current);
        }

        return () => {
            if (profileRef.current) {
                observer.unobserve(profileRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={profileRef}
            className={`profile ${isVisible ? 'fade-in' : 'fade-out'}`}
        >
            <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
            <h2 className="profile-name">Kai Nobuto</h2>
            <p className="profile-description">
                Hi, I'm Kai Nobuto, a software developer with a passion for building beautiful and
                functional web applications. I specialize in java.
            </p>
            <div className="profile-socials">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt="GitHub" className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default Profile;