
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="Footer">
            <p>&copy; 2024 Kai Nobuto. All rights reserved.</p>
            <div className="footer-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;