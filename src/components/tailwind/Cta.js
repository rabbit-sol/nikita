import React from "react";
import fancyLines from "../../Assets/fancyLines.svg"
import lineBreak from "../../Assets/lineBreak.svg"

function CTA() {
    return (
        <div className="pt-40 relative w-full">
            <img className="w-30 m-auto mb-2" src={lineBreak} />
            <div className="pt-8 pb-40">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 purple">
                    Interested in Working Together?
                </h2>
                <a
                    href="mailto:contact@braydentw.io"
                    className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
                >
                    Get in Touch
                </a>
            </div>

            <img
                className="sqD min-w-[600px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
                style={{ zIndex: "-10" }}
                src={fancyLines}
            />
        </div>
    );
}

export default CTA;
