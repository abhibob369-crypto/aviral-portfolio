export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Aviral Verma
        </h1>
        <p className="text-xl md:text-2xl text-blue-400 mb-6">
          AI & Data Science Student | IIT Jodhpur
        </p>
        <p className="max-w-2xl text-gray-300 text-lg mb-8">
          Passionate about Machine Learning, Deep Learning and building real-world AI solutions.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/abhibob369-crypto" target="_blank" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
            GitHub
          </a>
          <a href="#projects" className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg font-medium">
            View Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          I am currently pursuing B.S. in Artificial Intelligence and Data Science at IIT Jodhpur. 
          I love working on Machine Learning projects and solving real-world problems using AI.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {["Python", "Machine Learning", "Deep Learning", "PyTorch", "Scikit-learn", "SQL", "Pandas", "NumPy", "Tableau", "Git"].map((skill) => (
            <span key={skill} className="bg-gray-800 px-5 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">Project Title 1</h3>
            <p className="text-gray-400 mb-4">Short description of your project goes here.</p>
            <p className="text-sm text-blue-400 mb-4">Python • Machine Learning • Scikit-learn</p>
            <a href="#" className="text-sm underline">GitHub →</a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">Project Title 2</h3>
            <p className="text-gray-400 mb-4">Short description of your project goes here.</p>
            <p className="text-sm text-blue-400 mb-4">Python • Deep Learning • PyTorch</p>
            <a href="#" className="text-sm underline">GitHub →</a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-6">Feel free to reach out for collaborations or opportunities.</p>
        <a href="mailto:abhibob369@gmail.com" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium">
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2026 Aviral Verma
      </footer>

    </main>
  );
}