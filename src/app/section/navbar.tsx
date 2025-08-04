"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/app/component/index";
import "@/app/index.css";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {
                navLinks.map((item) => (
                    <li key={item.id} className="nav-li">
                        <Link href={item.href} className="nav-li_a" onClick={() => { }}>
                            {item.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <header className="fixed left-0 right-0 top-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">

                    <Link href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Gabrieee</Link>

                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label={"Toggle menu"}>
                        <Image src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="Menu" width={24} height={24}></Image>
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar;