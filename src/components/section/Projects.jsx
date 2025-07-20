export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20 projects-section">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent text-center">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="gallery-card bg-gray-800/20 backdrop-blur-md rounded-lg p-4">
                    <img src="\photo\Project-Dilemma.png"/>
                    <h3 className="text-2xl font-semibold mt-2">
                        Project Dillemma
                    </h3>
                    <p className="text-sm text-gray-400">
                        Project Dilemma is a chaotic, narrative-driven game where players use wit to navigate unpredictable scenarios. Available on Windows, it features exploration, inventory management, and character interactions with detailed art and animations. At 65% completion, it offers an engaging, story-focused experience.
                    </p>

                    <div className="flex justify-between items-center">
                        <a
                        href="https://jeremy-wowiling.itch.io/project-dilemma" target="_blank"
                        className="text-green-400 hover:text-green-300 transition-colors my-4"
                        >
                        View Project →
                        </a>
                    </div>
                </div>
                <div className="gallery-card bg-gray-800/20 backdrop-blur-md rounded-lg p-4">
                    <img src="\photo\Porto-Web.png"/>
                    <h3 className="text-2xl font-semibold mt-2">
                        TooRue Webpage
                    </h3>
                    <p className="text-sm text-gray-400">
                        This is my first portfolio website. It was created using ReactJS, Vite, and TailwindCSS.
                    </p>
                    <div className="flex justify-between items-center">
                        <a
                        href="#"
                        className="text-green-400 hover:text-green-300 transition-colors my-4"
                        >
                        View Project →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}