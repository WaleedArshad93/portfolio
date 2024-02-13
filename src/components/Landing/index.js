import React from "react"
import SocialLinks from "./SocialLinks";

const Landing = () => {

    return (
        <div className="flex flex-col h-dvh justify-between text-white">

            
        <div className=" flex flex-auto flex-row justify-between my-40">
            <div className="flex flex-1 flex-col self-start text-left gap-5">
                <p className="text-white">Hello My Name is</p>
                <p className="text-white text-3xl font-bold" style={{color:"#67C0CC"}}>Muhammad Waleed Arshad</p>
                <p className="text-white">I's full stack software enginner - Mobile & web</p>
                <p className="text-white">Learn More.!</p>
            </div>
            <div className="flex flex-1 justify-center">
                <img className="w-96 h-96 rounded-full" src="https://itswaleed.com/assets/img/1644059050048.jpg"/>
            </div>

        </div>

        <SocialLinks/>        
            
        </div>


    )
}



export default Landing;