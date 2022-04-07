import React from 'react';
import banner from '../../../images/banner.jpg'
import Slider from '../Carousel/Slider';
import NavMenu from '../Navbar/NavMenu';
import TopNav from '../TopNav/TopNav';

const Header = () => {
    /*  const bg = {
         background: `url(${banner})`,
         height: '100vh',
         width: '100%',
         backgroundSize: '100%',
         backgroundRepeat: 'no-repeat'
     } */
    return (
        <div>
            <TopNav />
            <NavMenu />
            <Slider />
        </div>
    );
};

export default Header;