import React from "react";
import Common from "../common";


const SocialLinks = ({className})=>{


    return(
        <div className="flex flex-row w-auto items-center text-zinc-400 mt-2">
            <Common.Button>
                <i className="ri-github-fill ri-xl"></i>
            </Common.Button>
            
            <Common.Button>
            <i className="ri-twitter-x-fill ri-xl"></i>
            </Common.Button>
            
            
            <Common.Button>
            <i className="ri-linkedin-box-fill ri-xl"></i>
            </Common.Button>
            
        </div>
    )
}

export default SocialLinks;
