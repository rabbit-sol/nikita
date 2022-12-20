import React from "react";
import fancyLines from "../../Assets/fancyLines.svg"
import lineBreak from "../../Assets/lineBreak.svg"

function CTA() {
    return (
        <div className="pt-10 relative w-full">
            <img className="w-30 m-auto mb-2" src={lineBreak} />
            <div className="pt-8 pb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 purple">
                    Interested in Working Together?
                </h2>
                <a
                    href="mailto:shubhamkunwar10feb@gmail.com?subject=Information About&body=Message"
                    className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
                >
                    Get in Touch
                </a>
            </div>

          
        </div>
    );
}

export default CTA;