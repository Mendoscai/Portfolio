export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent leading-right">
                Welcome, I'm Irfan
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                This is my portfolio website where I showcase my skills and projects.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-green-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg">
                    View Projects
                </a>
            </div>
        </div>
    </section>
}