export const About = () => {
  const skills = ["HTML", "CSS", "JavaScript", "C#", "Python", "Unity"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 about-section">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all text-center">
          <p className="text-gray-300 mb-6">
            Hey there! I'm a final-year Computer Science student, eagerly diving into the worlds of game development, AI, and front-end design. I’m passionate about learning to craft immersive games that spark joy, exploring AI to tackle intriguing challenges, and building sleek, user-friendly interfaces that make every interaction smooth. Still honing my coding skills and creative flair, I’m excited to experiment, grow, and turn my ideas into reality. Check out my portfolio to see my latest projects and join me on this thrilling learning journey!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="flex justify-center flex-wrap gap-2 w-full">
                {skills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-300/10 text-green-300 py-1 px-3 rounded-full text-sm hover:bg-green-300/20 
                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};