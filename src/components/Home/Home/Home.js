import React from 'react';
import Books from '../../Discover/AllBooks/Books';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import About from '../AboutUs/About';

const Home = () => {
    return (
        <div>
            <Header />
            <Books />
            <About />
            <Footer />
        </div>
    );
};

export default Home;