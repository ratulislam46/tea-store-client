import React from 'react';

const Header = () => {
    return (
        <div>
            <section
                className="relative min-h-[70vh] lg:min-h-[90vh] bg-cover bg-center"
                style={{
                     backgroundImage: "url('https://i.postimg.cc/c48v8vdN/3.png')"
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0  bg-opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full text-center px-4 py-12">
                    <div className="max-w-3xl text-white">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                            style={{ fontFamily: "'Pacifico', cursive" }}
                        >
                            Would you like a Cup of Delicious Coffee?
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed px-2 md:px-0">
                            It’s coffee time – Sip & Savor – Relaxation in every sip! Get the nostalgia back!<br />
                            Your companion of every moment! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded transition shadow-md">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;