javascript
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-4">
                        <h5 className="text-lg font-semibold">Contact Us</h5>
                        <p className="flex items-center">
                            <MapPin className="mr-2" />
                            123 Uproot St, Green City, CA
                        </p>
                        <p className="flex items-center">
                            <Phone className="mr-2" />
                            (555) 123-4567
                        </p>
                        <p className="flex items-center">
                            <Mail className="mr-2" />
                            support@uproot.com
                        </p>
                    </div>
                    <div className="mb-4">
                        <h5 className="text-lg font-semibold">Quick Links</h5>
                        <ul>
                            <li>
                                <a href="/" className="text-gray-400 hover:text-white">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
                            </li>
                            <li>
                                <a href="/services" className="text-gray-400 hover:text-white">Services</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Uproot. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
