import React from "react"
import SocialLinks from "./SocialLinks";
import Common from "../common";

const Landing = () => {

    return (
        <div className="flex flex-col h-dvh justify-between text-white">

        <Common.TopNavbar/>
        <div className="flex flex-auto flex-row justify-between my-20">
            <div className="basis-1/1 md:basis-1/4 xl:basis-1/5 bg-card flex flex-col gap-5 p-5 rounded-2xl justify-between">
                <div className="flex flex-col gap-2 my-2">
                    <img className="w-28 h-28 rounded-full self-center" src="https://itswaleed.com/assets/img/1644059050048.jpg"/>
                    <p className="text-white">Waleed Arshad</p>
                    <p className="text-white">Doha, Qatar</p>
                    <Common.Button name={"UpdateInfo"} onClick={()=>{}} active={true} className={"mt-2"}>
                        Contact Me
                    </Common.Button>
                </div>

                <div className="my-2 flex flex-col gap-1">
                    <div className="flex flex-row justify-between">
                        <p className="text-sm">Projects Details</p>
                        <p className="font-bold text-sm">5</p>
                    </div>

                    <div className="flex flex-row justify-between">
                    <p className="text-sm">Projects Details</p>
                        <p className="font-bold text-sm">5</p>
                    </div>

                    <div className="flex flex-row justify-between">
                    <p className="text-sm">Projects Details</p>
                        <p className="font-bold text-sm">5</p>
                    </div>
                </div>

                <div className="flex flex-col self-start items-start my-2">
                        <p className="font-bold">Profile</p>
                        <p className="text-left text-sm my-1">Welcome to my portfolio! I'm Waleed, a software developer with a passion for creating innovative solutions. Currently seeking new opportunities to collaborate and grow.</p>
                </div>
                
                <div className="flex flex-col items-center my-1">
                    <p className="font-bold self-start">Lets Connect</p>
                    <SocialLinks/>
                </div>

            </div>
            {/* <div className="flex flex-1 justify-center">
    
            </div> */}
        </div>  
        </div>
    )
}



export default Landing;