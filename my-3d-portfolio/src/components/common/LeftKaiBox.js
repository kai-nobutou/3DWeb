// src/components/LeftBox.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LeftKaiBox.css';

const LeftBox = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="left-kai-box fade-in" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <h1>kai box</h1>
        </div>
    );
};

export default LeftBox;