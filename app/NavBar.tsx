import React from 'react';
import Link from "next/link";
import { PiBugBeetleFill } from "react-icons/pi";

const NavBar = () => {

    const links = [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/issues" },
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-4 h-14 items-center'>
            <Link href="/">
                <PiBugBeetleFill />
            </Link>
            <ul className='flex space-x-6'>
                {links.map((link) =>
                    <Link
                        key={link.href}
                        href={link.href}
                        className='text-zinc-400 hover:text-zinc-800 transition-colors'>
                        {link.label}
                    </Link>)}

            </ul>
        </nav>
    )
};

export default NavBar;
