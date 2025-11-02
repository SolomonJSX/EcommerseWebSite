"use client"

import React from "react";
import Link from "next/link";
import {HiOutlineShoppingBag, HiOutlineUser} from "react-icons/hi";
import {HiBars3BottomRight} from "react-icons/hi2";
import SearchBar from "@/components/common/SearchBar";
import CartDrawer from "@/components/layout/CartDrawer";
import {IoMdClose} from "react-icons/io";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const [navbarDrawerOpen, setNavbarDrawerOpen] = React.useState(false);

    const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

    const toggleNavbarDrawer = () => setNavbarDrawerOpen(!navbarDrawerOpen);

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Логотип / Название */}
                <div>
                    <Link href="/" className="text-2xl font-semibold text-green-600">
                        HealthPlus
                    </Link>
                </div>

                {/* Навигация */}
                <div className="hidden md:flex space-x-6">
                    <Link
                        href="#"
                        className="text-gray-700 hover:text-green-700 text-sm font-medium uppercase"
                    >
                        Каталог
                    </Link>

                    <Link
                        href="#"
                        className="text-gray-700 hover:text-green-700 text-sm font-medium uppercase"
                    >
                        Лекарства
                    </Link>

                    <Link
                        href="#"
                        className="text-gray-700 hover:text-green-700 text-sm font-medium uppercase"
                    >
                        Витамины
                    </Link>

                    <Link
                        href="#"
                        className="text-gray-700 hover:text-green-700 text-sm font-medium uppercase"
                    >
                        Уход и гигиена
                    </Link>

                    <Link
                        href="#"
                        className="text-gray-700 hover:text-green-700 text-sm font-medium uppercase"
                    >
                        Медтехника
                    </Link>

                    <Link
                        href="#"
                        className="text-gray-700 hover:text-green-700 text-sm font-medium uppercase"
                    >
                        Контакты
                    </Link>
                </div>

                {/* Правая иконы */}
                <div className={"flex items-center space-x-4"}>
                    <Link href={"/profile"} className={"hover:text-black"}>
                        <HiOutlineUser className={"h-6 w-6 text-gray-700"} />
                    </Link>

                    <button className={"relative hover:text-black cursor-pointer"} onClick={toggleCartDrawer}>
                        <HiOutlineShoppingBag className={"h-6 w-6 text-gray-700"} />
                        <span>
                        <span className={"absolute bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5 -top-1"}>
                            4
                        </span>
                    </span>
                    </button>

                    <div className={"overflow-hidden"}>
                        <SearchBar />
                    </div>

                    <button onClick={toggleNavbarDrawer} className={"md:hidden"}>
                        <HiBars3BottomRight className={"h-6 w-6 text-gray-700"} />
                    </button>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
            {/*Mobile Navigation*/}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
                navbarDrawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
                <div className={"flex justify-end p-4"}>
                    <button onClick={toggleNavbarDrawer}>
                        <IoMdClose className={"h-6 w-6 text-gray-600"} />
                    </button>
                </div>
                <div className={"p-4"}>
                    <h2 className={"text-xl font-semibold mb-4"}>Menu</h2>
                    <nav className={"space-y-4"}>
                        <Link
                            href="#"
                            onClick={toggleNavbarDrawer} className={"block text-gray-600 hover:text-black"}
                        >
                            Каталог
                        </Link>

                        <Link
                            href="#"
                            onClick={toggleNavbarDrawer} className={"block text-gray-600 hover:text-black"}
                        >
                            Лекарства
                        </Link>

                        <Link
                            href="#"
                            onClick={toggleNavbarDrawer} className={"block text-gray-600 hover:text-black"}
                        >
                            Витамины
                        </Link>

                        <Link
                            href="#"
                            onClick={toggleNavbarDrawer} className={"block text-gray-600 hover:text-black"}
                        >
                            Уход и гигиена
                        </Link>

                        <Link
                            href="#"
                            onClick={toggleNavbarDrawer} className={"block text-gray-600 hover:text-black"}
                        >
                            Медтехника
                        </Link>

                        <Link
                            href="#"
                            onClick={toggleNavbarDrawer} className={"block text-gray-600 hover:text-black"}
                        >
                            Контакты
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
