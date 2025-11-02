import React from 'react';
import {TbBrandInstagram, TbBrandMeta} from "react-icons/tb";
import {RiTwitterXLine} from "react-icons/ri";

const TopBar = () => {
    return (
        <div className={"bg-rabbit-red text-white"}>
            <div className="container mx-auto flex justify-between items-center">
                <div className={"hidden md:flex items-center space-x-4"}>
                    <a href="#" className={"hover:text-gray-300"}>
                        <TbBrandMeta className={"h-5 w-5"} />
                    </a>
                    <a href="#" className={"hover:text-gray-300"}>
                        <TbBrandInstagram className={"h-5 w-5"} />
                    </a>
                    <a href="#" className={"hover:text-gray-300"}>
                        <RiTwitterXLine className={"h-5 w-5"} />
                    </a>
                </div>

                <div className={"text-sm text-center grow"}>
                    <span>
                        We ship worldwide - Fast and reliable shipping!
                    </span>
                </div>

                <div className={"text-sm"}>
                    <a href="tel:+87020643048" className={"hover:text-gray-300"}>
                        +1 (234) 567-890
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;