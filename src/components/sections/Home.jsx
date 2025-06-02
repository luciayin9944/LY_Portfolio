
export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-cneter z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-pink-400 bg-clip-text text-transparent leading-right">
                    Hi, I'm Luxia Yin
                </h1>
                <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Hello! I'm a passionate full-stack developer who enjoys turning ideas into impactful Projects. 
                    I love learning new technologies and solving problems through code.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="cosmic-button">
                        Resume
                    </a>
                    <a href="#contact" className="cosmic-button">
                        {" "}
                        Contact Me
                    </a>
                  </div>

                </div>
            </div>
        </section>
    );
};