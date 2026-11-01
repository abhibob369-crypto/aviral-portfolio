export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-wide">Aviral Verma</h1>
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] text-center px-6">
        <p className="text-blue-400 mb-4 tracking-widest text-sm uppercase">AI & Data Science Student</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Aviral Verma
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          IIT Jodhpur
        </p>
        <p className="max-w-2xl text-gray-400 text-lg mb-10 leading-relaxed">
          Passionate about Machine Learning, Deep Learning and building real-world AI solutions that create impact.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="https://github.com/abhibob369-crypto" 
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-medium transition"
          >
            GitHub
          </a>
          <a 
            href="#projects" 
            className="border border-gray-600 hover:border-white px-8 py-3 rounded-full font-medium transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          I am currently pursuing B.S. in Artificial Intelligence and Data Science at 
          <span className="text-blue-400"> IIT Jodhpur</span>. 
          I love working on Machine Learning projects and solving real-world problems using AI. 
          Always curious to learn new technologies and build meaningful solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-900/50">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            "Python", "Machine Learning", "Deep Learning", "PyTorch", 
            "Scikit-learn", "SQL", "Pandas", "NumPy", "Tableau", "Git"
          ].map((skill) => (
            <span 
              key={skill} 
              className="bg-gray-800 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-500 px-5 py-2.5 rounded-full text-sm transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-gray-900/80 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition group">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">Project Title 1</h3>
            <p className="text-gray-400 mb-5 leading-relaxed">
              Short description of your project goes here. Explain what problem it solves.
            </p>
            <p className="text-sm text-blue-400 mb-5">Python • Machine Learning • Scikit-learn</p>
            <a href="#" className="text-sm text-gray-300 hover:text-white underline underline-offset-4">
              View on GitHub →
            </a>
          </div>

          <div className="bg-gray-900/80 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition group">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">Project Title 2</h3>
            <p className="text-gray-400 mb-5 leading-relaxed">
              Short description of your project goes here. Explain what problem it solves.
            </p>
            <p className="text-sm text-blue-400 mb-5">Python • Deep Learning • PyTorch</p>
            <a href="#" className="text-sm text-gray-300 hover:text-white underline underline-offset-4">
              View on GitHub →
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Feel free to reach out for collaborations, opportunities or just a tech discussion.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a 
            href="mailto:abhibob369@gmail.com" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-medium transition"
          >
            abhibob369@gmail.com
          </a>
          <a 
            href="tel:+917234961023" 
            className="border border-gray-600 hover:border-white px-8 py-3 rounded-full font-medium transition"
          >
            +91 7234961023
          </a>
        </div>

        <div className="flex justify-center gap-6 text-gray-400">
          <a href="https://github.com/abhibob369-crypto" target="_blank" className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" className="hover:text-white transition">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        © 2026 Aviral Verma • Built with Next.js
      </footer>

    </main>
  );
}
