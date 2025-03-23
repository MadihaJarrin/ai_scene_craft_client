import React from 'react';

const Navbar = () => {
    return (
        <nav className=" bg-violet-600 text-white p-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-semibold">
                    <a href="/" className="hover:text-gray-300">
                        AI Scene Craft
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="/content" className="hover:text-gray-300">Content</a>
                    <a href="/about" className="hover:text-gray-300">About Us</a>
                    <a href="/contact" className="hover:text-gray-300">Contact</a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button className="text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;