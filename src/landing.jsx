function Portfolio() {
    return (
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-5xl font-bold">Biswajit Sharma</h1>
        <p className="text-xl mt-2">Software Developer | Web Enthusiast</p>
        <div className="mt-6 flex space-x-4">
          <a href="#about" className="bg-blue-500 px-4 py-2 rounded-lg">About Me</a>
          <a href="#projects" className="bg-green-500 px-4 py-2 rounded-lg">Projects</a>
          <a href="#contact" className="bg-purple-500  px-4 py-2 rounded-lg">Contact</a>
        </div>
      </div>
    );
  }
  export default Portfolio;