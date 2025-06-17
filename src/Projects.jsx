

function Projects(){
    let project=[
        {
            title:"Fake News Detection Program as Final Year Project",
           img:"\ML.png",
            stack: "python + Jupyter",
            learning:"understood  machine learning and various" +"  Alogorithms like TFIDF, binary classifiers"+" and libraries of machine learning Scikit-learn , models like-Passive Agressive Classifiers"
        },
        {
            title: "Flappy Bird Game",
           img: "",
            stack: "JAVA(Jframe,Jpanel,etc)",
            learning:"understood how graphics are rendered and manipulated in Java using Jframe and Jpanel"+" understood Event listeners and timer Packages",
            source:"",
            live:""
        },
        {
            title:"Weather App",
           img:"",
            stack: "Asynchronous javascript",
            learning:"API integration" +" API fetching "+ " API calls",
            source:"",
            live:""
        },
        {
            title:"ToDo Application",
            img:"",
            stack: "REACT +Vite",
            learning: "React -Props, conditional rendering,Hooks and State management ,etc"
        }
        
    ]
return(<div className="relative bg-neutral-300/20 content-center  grid grid-cols-2 mt-10 gap-3  p-5">
            
                {project.map((item,index)=>(
                <div key={index} className="flex flex-col justify-center items-center h-full w-full border-2 rounded-4xl shadow-md shadow-violet-400">
                    <h2 className=" bg-neutral-400 m-2 w-full text-center">{item.title}</h2>
                    <img className="w-[300px] h-[280px]" src={item.img}/>
                    <section className="flex flex-col justify-center items-center bg-white">
                    <p>Tech/ Stack : {item.stack}</p>
                    <p>what i learnt :{item.learning}</p>
                    <p><span>source-code:{item.source}</span><span>Live-link:{item.live}</span></p>
                    </section>
                    
                </div>
                ))}
            

</div>);

}
export default Projects