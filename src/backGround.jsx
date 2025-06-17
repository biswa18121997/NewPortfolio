import { useEffect, useRef } from "react";
//import Portfolio from 'landing.jsx';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 100 }, () => createStar());
    const comets = Array.from({ length: 100 }, () => createComet()); // Increased comets count
    const spaceships = Array.from({ length: 5 }, () => createSpaceship()); // Increased spaceship count

    function createStar() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
      };
    }

    function createComet() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height ,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      };
    }

    function createSpaceship() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 1.5 + 0.5,
        size: Math.random() * 30 + 15, // Increased spaceship size
        color: `hsl(${Math.random() * 360}, 100%, 70%)`, // Random spaceship color
      };
    }

    function drawStars() {
      ctx.fillStyle = "#fff";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });
    }

    function drawComets() {
      comets.forEach((comet) => {
        const gradient = ctx.createLinearGradient(comet.x, comet.y, comet.x - comet.length, comet.y);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(comet.x - comet.length, comet.y);
        ctx.stroke();
        
        comet.x -= comet.speed;
        if (comet.x < -comet.length) comet.x = canvas.width + Math.random() * 100;
      });
    }

    function drawSpaceships() {
      spaceships.forEach((ship) => {
        ctx.fillStyle = ship.color;
        ctx.beginPath();
        ctx.moveTo(ship.x, ship.y);
        ctx.lineTo(ship.x - ship.size, ship.y + ship.size / 2);
        ctx.lineTo(ship.x - ship.size, ship.y - ship.size / 2);
        ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle = "white"; // Adding spaceship window
        ctx.beginPath();
        ctx.arc(ship.x - ship.size / 2, ship.y, ship.size / 6, 0, Math.PI * 2);
        ctx.fill();
        
        ship.x += ship.speed;
        if (ship.x > canvas.width) ship.x = -ship.size;
      });
    }

    function animate() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawStars();
      drawComets();
      drawSpaceships();
      requestAnimationFrame(animate);
    }

    animate();

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (  <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" style={{ pointerEvents: "none" }} />);
            
              
                  {/* <Portfolio /> */}
             
  
};

// const Portfolio = () => {
//   return (
//     <div className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center p-4">
//       <h1 className="text-5xl font-bold">Biswajit Sharma</h1>
//       <p className="text-xl mt-2">Software Developer | Web Enthusiast</p>
//       <div className="mt-6 flex space-x-4">
//         <a href="#about" className="bg-blue-500 px-4 py-2 rounded-lg">About Me</a>
//         <a href="#projects" className="bg-green-500 px-4 py-2 rounded-lg">Projects</a>
//         <a href="#contact" className="bg-purple-500  px-4 py-2 rounded-lg">Contact</a>
//       </div>
//     </div>
//   );
// };



export default StarryBackground;
