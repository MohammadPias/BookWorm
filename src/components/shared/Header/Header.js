import React from 'react';
import banner from '../../../images/banner.jpg'
import TopNav from '../Navbar/TopNav';

const Header = () => {
    const bg = {
        background: `url(${banner})`,
        height: '100vh',
        width: '100%',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div style={bg}>
            <TopNav />
        </div>
    );
};

export default Header;