// src/components/Hero.js
import React from 'react';
import { Book, Star, Heart } from 'lucide-react';

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center p-8">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to Uproot</h1>
            <p className="text-lg mb-8">
                Discover the power of transformation with Uproot – your go-to solution for personal and professional growth.
            </p>
            <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                    <Book className="h-10 w-10 mb-2" />
                    <span>Learn</span>
                </div>
                <div className="flex flex-col items-center">
                    <Star className="h-10 w-10 mb-2" />
                    <span>Innovate</span>
                </div>
                <div className="flex flex-col items-center">
                    <Heart className="h-10 w-10 mb-2" />
                    <span>Empower</span>
                </div>
            </div>
            <a href="#features" className="mt-8 bg-white text-blue-500 py-2 px-4 rounded-lg font-semibold transition duration-300 hover:bg-blue-100">
                Get Started
            </a>
        </section>
    );
};

export default Hero;
