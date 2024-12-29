import React, { useState } from 'react';

const About = () => {
    const [showAbout, setShowAbout] = useState(false);

    const handleAboutClick = () => {
        setShowAbout(true);
    };

    const handleHomeClick = () => {
        setShowAbout(false);
    };

    return (
        <div>
            {/* Navigation */}
            <nav className="bg-gray-800 text-white py-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                    <div className="text-xl font-bold">My Website</div>
                    <ul className="flex space-x-4">
                        <li>
                            <button 
                                onClick={handleHomeClick} 
                                className="hover:text-yellow-400 transition"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={handleAboutClick} 
                                className="hover:text-yellow-400 transition"
                            >
                                About
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Conditional Rendering */}
            <div className="p-6">
                {!showAbout ? (
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
                        <p className="text-gray-700">
                            This is the home page. Click "About" in the navigation bar to learn more about me.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-4xl font-bold mb-4">About Me</h1>
                        <p className="text-gray-700">
                            Here you can add information about yourself, your interests, and your work.
                        </p>
                        <button 
                            onClick={handleHomeClick} 
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                        >
                            Back to Home
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;