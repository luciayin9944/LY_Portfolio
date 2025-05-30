

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-40" style={{ backgroundColor: '#474545' }}>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        Luxia<span className="text-blue-500">.tech</span>
                    </a>
                    
                    <div className="space-x-6">
                        <a href="#home" className="font-mono text-white text-lg">Home</a>
                        <a href="#about" className="font-mono text-white text-lg">About</a>
                        <a href="#projects" className="font-mono text-white text-lg">Projects</a>
                        <a href="#contact" className="font-mono text-white text-lg">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}



