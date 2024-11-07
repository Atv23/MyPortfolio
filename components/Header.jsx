import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';
const Header = () => {
    return <header className="py-8 xl:py-8 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold">
                    <span className="text-accent">{"<h1>"}</span>Hello World!<span className="text-accent">{"</h1>"}</span>
                </h1>
            </Link>

            {/* desktop nav & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
            </div>
            {/* {mobile nav} */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>

    </header>;
};

export default Header;