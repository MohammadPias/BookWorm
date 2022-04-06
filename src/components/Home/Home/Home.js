import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import About from '../AboutUs/About';
import Books from '../Books/Books';

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