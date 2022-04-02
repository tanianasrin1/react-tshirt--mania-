import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to t-shirt monia</h2>
            <nav>
                <CustomLink to= '/home' > Home </CustomLink>
                <CustomLink to ='/oderReview' >OderReview</CustomLink>
                <CustomLink to ='/grandPa' >GrandPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;