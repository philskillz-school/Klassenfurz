"use client";
import React, { RefObject, useEffect, useState } from "react";
import Link from "next/link";
import { initFlowbite } from 'flowbite';
import type { CollapseOptions } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
    function getLoggedInUser() {
        // return null;
        return {
            name: "David Wesch",
            email: "davidernst0902@gmail.com"
        }
    }



    const user = getLoggedInUser();
    const targetEl: RefObject<HTMLDivElement> = React.createRef();
    const triggerEl: RefObject<HTMLButtonElement> = React.createRef();
    const path = usePathname();

    function getLink(aUrl: string, text: string) {
        const isActive = aUrl === path;

        const classes = isActive ? "block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0" : "block py-2 px-3 text-gray-400 rounded hover:bg-gray-500 hover:text-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0";
        return <Link href={aUrl} className={classes} aria-current={isActive ? "page" : "false"}>
            {text}
        </Link>
    }

    useEffect(() => {
        const options: CollapseOptions = {
            onCollapse: () => {
            },
            onExpand: () => {
            },
            onToggle: () => {
            },
        };

        // instance options object
        const instanceOptions: InstanceOptions = {
            id: 'targetEl',
            override: true
        };

        initFlowbite();
    }, []);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        const mode = isDarkMode ? 'light' : 'dark';
        document.documentElement.setAttribute('data-mode', mode);
    };

    return (<>
        <nav className="w-full">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-full">
                <div className="md:flex-start">
                    <a href="https://theskz.dev/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="logo.svg" className="h-8" alt="SKZ Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Klassenfurz</span>
                    </a>
                </div>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* person button */}
                    <button type="button" className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-500 hover:bg-gray-800" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>
                    <div ref={targetEl} className="z-50 hidden my-4 text-base list-none divide-y divide-gray-500 rounded-lg shadow bg-t-medium-gray" id="user-dropdown">
                        <div className="px-4 py-3">
                            { user != null && <>
                                <span className="block text-sm text-gray-300 truncate">{user.name}</span>
                                <span className="block text-sm text-gray-400 truncate">{user.email}</span>                                
                            </>}
                            { user == null && <>
                                <span className="block text-xs text-gray-400 truncate">Du bist nicht angemeldet</span>
                            </>}
                        </div>
                        <ul className="py-2 text-gray-300 text-sm" aria-labelledby="user-menu-button">
                            { user != null && <>
                                <li>
                                    <Link href="/artikel/neu" className="block px-4 py-2 hover:text-gray-600">
                                        Neuer Artikel
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/konto" className="block px-4 py-2 hover:text-gray-600">
                                        Konto
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/logout" className="block px-4 py-2 hover:text-gray-600">
                                        Abmelden
                                    </Link>
                                </li>
                            </>}
                            { user == null && <>
                                <li>
                                    <Link href="/login" className="block px-4 py-2 hover:text-gray-600">
                                        Anmelden
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/register" className="block px-4 py-2 hover:text-gray-600">
                                        Registrieren
                                    </Link>
                                </li>
                            </>}
                        </ul>
                    </div>
                    <button ref={triggerEl} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-500" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:flex-center" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                        <li>
                            {getLink("/", "Home")}
                        </li>
                        <li>
                            {getLink("/artikel", "Artikel")}
                        </li>
                        <li>
                            {getLink("/cbs", "Schule")}
                        </li>
                        <li>
                            {getLink("/about", "Über uns")}
                        </li>
                        <li>
                            {getLink("/kontakt", "Kontakt")}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar;