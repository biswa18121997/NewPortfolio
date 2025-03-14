import { useState } from "react";

function Nav(){
    const [darkMode,setDarkMode]=useState(true);

    function mob(){
        let nav=["Home" ,
            "Projects",
            "Skills/ TechStacks",
            "Degre / Certificates"

        ];
        return nav.map((element,index)=>{
            return(<>
                <li key={index} className="pr-7 text-white relative" >{element}</li>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
                </>
                
            )
        });
    }

    return(
        <nav className="rounded-4xl  flex justify-between shadow-neutral-500 shadow-[0px_5px_0px_2px_rgba(255,255,255,0)_inset,0px_0px_50px_0px_rgba(255,255,255,0)_inset] fixed z-20">
            <section className="p-3 animate-pulse">
            <i class="text-yellow-500 text-7xl  fa-brands fa-bitcoin" ></i>
            <i class=" text-red-500 text-6xl fa-solid fa-sack-dollar"></i>
            </section>
            
            <img 
            className=" w-1/5 p-3"
            src="src\assets\MERN-logo.png" alt="" />
            

            
        
            <ul className="group flex justify-center items-center pr-8">
                {mob()}
                <span className="animate-bounce absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-5px w-3/4 mx-auto "></span>
                <span className="group-hover:opacity-100 animate-pulse absolute inset-x-0 -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-5px w-3/4 mx-auto blur-3xl"></span>
                {/* <li className="pr-3" >Home</li>
                <li className="pr-3">Prorjects</li>
                <li className="pr-3">Skills / TechStacks</li>
                <li className="pr-2">Degre / Certificates</li> */}
                

            </ul>
            <button className="p-5"><i class="fa-solid fa-list-ul"></i></button>

        
        
        </nav>
    );
}
export default Nav;