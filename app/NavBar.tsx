'use client';

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { PiBugBeetleFill } from "react-icons/pi";
import classNames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();

    // 通用做法
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
                        // className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-400'} 
                        // hover:text-zinc-800 
                        // transition-colors`} 
                        className={
                            classNames({
                                'text-zinc-900': link.href === currentPath,
                                'text-zinc-400': link.href !== currentPath,
                                'hover:text-zinc-800 transition-colors': true
                            })
                        }
                        >
                        {link.label}
                    </Link>)}

            </ul>
        </nav>
    )
};

export default NavBar;
