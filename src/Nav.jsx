

function Nav(){
   const nav=["Home" , "Projects", "Skills/ TechStacks", "Certifications","About"];

   return( <nav className="w-screen  z-20 relative flex justify-around  mt-2 mb-4">
    <section className="text-white text-6xl flex justify-center items-center">
        <i className="fa-brands fa-bitcoin text-red-600"></i>
        <i className="fa-solid fa-sack-dollar text-yellow-300"></i>
    </section>

    <section className="w-1/6 ">
        <img src="/MERN-logo.png" className="h-full w-full" alt="" />
    </section>
    <ul className="text-white flex">
        {nav.map((item,index)=>(
            <li key={index} className="text-white m-2 p-2 relative group z-20 font-bold text-xl hover:duration-1000 hover:border-2">{item}
            <span className="w-0 group-hover:w-full absolute group-hover:duration-700 rounded-b-2xl group-hover:bg-red-400  bottom-5 -z-10 left-0 h-full"></span>
           
            
            
            </li>
        ))}
    </ul>

   </nav>)

}
export default Nav;

     
