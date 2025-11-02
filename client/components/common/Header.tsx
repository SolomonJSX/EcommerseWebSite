import React from 'react';
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/common/Navbar";

const Header = () => {
    return (
        <header className={"border border-gray-200"}>
            <TopBar />
            <Navbar />
        </header>
    );
};

export default Header;