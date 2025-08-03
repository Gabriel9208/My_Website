import React from "react";
import Link from "next/link";
import "@/app/globals.css";

const Navbar = () => {
    return(
        <header className="fixed left-0 right-0 top-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <Link href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Gabrieee</Link>
                    
                </div>
            </div>
        </header> 
    )
}

export default Navbar;