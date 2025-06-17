import Typewriter from 'typewriter-effect';


function Portfolio() {
    return (
      <div className="flex relative justify-around z-30   ">
        
       

     
        <div className="relative w-2/3  h-1/2 flex  items-center opacity-80 justify-center text-white text-center  bg-radial-[at_25%_25%] from-gray-500 to-zinc-900 to-75%">
          <section className="relative top-20 bg-gray-400 rounded-full">
              <img src="\biswa.png" alt="" className="h-1/2 rounded-full object-cover absloute  w-full "/>
              <div className="bg-blue-500">
                <h1 className="text-5xl font-bold">Biswajit Sharma</h1>
                <p className="text-xl mt-2">Software Developer | Web Enthusiast</p>
            </div>
          </section>
          
          <div>

          <div className="mt-6 flex space-x-4 ">
            <a href="#about" className="bg-blue-500 px-4 py-2 rounded-lg ">About Me</a>
            <a href="#projects" className="bg-green-500 px-4 py-2 rounded-lg">Projects</a>
            <a href="#contact" className="bg-purple-500  px-4 py-2 rounded-lg  ">Contact</a>
          </div>
          <div>
                      <Typewriter 
              options={{
                strings: ['HELLO ITS GREAT TO SEE YOU HERE  !!','I am Biswajit ,an aspiring Software developer','I am specialised in the MERN Stack <i class="fa-brands fa-node-js"></i> , <i class="fa-brands fa-react"></i> , EX , <i class="fa-solid fa-database"></i>'],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-white text-3xl duration-300 opacity-100 "
              }}
/>
          </div>
          <h1 className='border-2 rounded-2xl p-2 hover:bg-red-500 absolute right-10 bottom-0 '>Download CV / Resume </h1>
          </div>
          
        </div>
      </div>
    );
  }
  export default Portfolio;