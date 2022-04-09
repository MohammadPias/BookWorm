import React from 'react';
import Slider from '../Carousel/Slider';
import NavMenu from '../Navbar/NavMenu';
import TopNav from '../TopNav/TopNav';

const Header = () => {
    return (
        <div>
            <TopNav />
            <NavMenu />
            <Slider />
        </div>
    );
};

export default Header;