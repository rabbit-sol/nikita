import { Link }from "react-router-dom";
import React from "react";
import { footer } from "./Data/global";
import { Web3Button, useAddress } from "@thirdweb-dev/react";
import { useContract } from '@thirdweb-dev/react'

import buy_coffee from  "../Assets/buy-me-a-coffee.svg"
import paypal from  "../Assets/paypal.svg"
function Footer() {
    const address = useAddress();
 const { contract, isLoading, error } = useContract("0xaeF12764A9CBBa5c28867203B4d202252574A2fd", "nft-collection")
    


  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 ">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase  text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                                  target="_blank" style={{ textDecoration: "none" }}
                                  className="items-center flex no-underline text-white"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <img src={item.icon} width={20} height={20} />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                                  <Link className=" no-underline text-white" to={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold">
            Support My Work
          </h4>
                  <div className="space-y-2 mt-4 w-full flex  items-center sm:items-start flex-col grid justify-items-center">
            {footer.support.buymeacoffee !== "" && (
              <div>
               
                  <img
                                      src={buy_coffee}
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                  />
               
              </div>
            )}
            
              <div>
              
                
                          <Web3Button
                              contractAddress={contract}
                              action={(contract) => {
                                  contract.call("mintTo", address)
                              }}
                          >
                             Buy Me A Coffee
                          </Web3Button>
              </div>
           
            <p className="text-fun-gray text-xs pt-1">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <p className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
                          href="mailto:shubhamkunwar10feb@gmail.com?subject=Personal Message&body=Message"
              className="text-fun-gray-light font-medium"
            >
             Shubham Kunwar
            </a>
            . All rights reserved.
          </div>
        </p>
      </div>
    
    </footer>
  );
}

export default Footer;
