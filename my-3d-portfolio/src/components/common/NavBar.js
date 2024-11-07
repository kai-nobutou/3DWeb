import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './NavBar.css';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [iconVisible, setIconVisible] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setIconVisible(!iconVisible);
    };

    const handleOutsideClick = (event) => {
        if (!event.target.closest('.menu') && !event.target.closest('.menu-icon')) {
            setMenuOpen(false);
            setIconVisible(true);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <div className="navbar" style={{ zIndex: 9999 }}>
            <div className="logo"></div>
            <div className="menu-icon" onClick={toggleMenu} style={{ zIndex: 9999 }}>
                &#9776;
            </div>
            <div className={`menu ${menuOpen ? 'open' : ''}`} style={{ zIndex: 9999 }}>
                <ScrollLink 
                    to="header" 
                    smooth={true} 
                    duration={500} 
                    className="menu-item" 
                    activeClass="active"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </ScrollLink>
                <ScrollLink 
                    to="profile" 
                    smooth={true} 
                    duration={500} 
                    className="menu-item" 
                    activeClass="active"
                    onClick={() => setMenuOpen(false)}
                >
                    Portfolio
                </ScrollLink>
                <ScrollLink 
                    to="blog-list" 
                    smooth={true} 
                    duration={500} 
                    className="menu-item" 
                    activeClass="active"
                    onClick={() => setMenuOpen(false)}
                >
                    Blog
                </ScrollLink>
            </div>
        </div>
    );
}

export default NavBar;