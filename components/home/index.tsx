'use client'

import React from 'react'
import Hero from '@/components/home/hero'
import About from '@/components/home/about';
import Services from '@/components/home/services';
import Contact from '@/components/home/contact';
import FAQs from '@/components/faqs';
import Testimonials from '@/components/home/testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Contact />
            <FAQs />
            <Testimonials />
        </>
    );
};

export default Home;