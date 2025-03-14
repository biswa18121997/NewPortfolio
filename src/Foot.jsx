

function Foot(){

    function socials(){
        let arr=[
            ["Twitter / X", "https://x.com/Biswajit_18S","fa-brands fa-x-twitter" ],
            ["LinkedIn", "https://www.linkedin.com/in/biswajit-sharma-48a10619b/", "fa-brands fa-linkedin"],
            ["Facebook","https://www.facebook.com/biswajit.sharma.921","fa-brands fa-facebook","fa-brands fa-x-twitter" ],
            ["Discord","",""]
        ];

        return (
            <ul className="flex justify-evenly text-blue-500">
                {arr.map((ele,index)=>(
                    <a href={ele[1]} target="_blank">
                    <li key={index}>{ele[0]}
                    <i className={ `${ele[2]} border rounded-full text-3xl`} ></i></li></a>
                )
                    )}
            </ul>
        );
    }

    function links(){
        let list=["HOME" ,
                    "ABOUT",
                    "PROJECTS",
                    "CONNECT"
        ];
        return (
            <ul className=" pl-5 list-none">
                {list.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                ))}
            </ul>
        );
    }

    return(
        <>
            <footer className="z-20  flex-col justify-evenly  p-5 text-amber-50 bg-transparent">

                <div className="">
                    {socials()}

                </div>
                <div>
                <div className="border flex-col p-5  text-black bg-transparent ">
                    <h1>OFFER ME A JOB: </h1>
                    <input type="text" placeholder="Enter your message / E-mail" className="bg-white rounded-3xl "></input>
                    <button type="button" className="border bg-blue-200 m-4 rounded-2xl p-3 hover:bg-blue-600 transition duration-300"> Send..and I'll Contact you soon</button>
                    <div className="flex-col justify-center">
                        {links()}
                    </div>
                </div>

                </div>
                
                
               
               

            </footer>
        </>
    );
}
export default Foot;