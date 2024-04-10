"use client";
import React, { LegacyRef, RefObject, useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Image from "next/image";
import { Collapse, initFlowbite } from 'flowbite';
import type { CollapseOptions, CollapseInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import { useRouter } from "next/router";

function Navbar() {

    function getLoggedInUser() {
        return null;
        return {
            name: "John Doe",
            email: "JohnDoe@asd.bsd"
        }
    }



    const user = getLoggedInUser();
    const targetEl: RefObject<HTMLDivElement> = React.createRef();
    const triggerEl: RefObject<HTMLButtonElement> = React.createRef();
    const router = useRouter();

    function getLink(aUrl: string, text: string) {
        const isActive = aUrl === router.pathname;

        const classes = isActive ? "block py-2 px-3 text-black rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white-500" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 dark:text-black md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700";
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
        <nav className="border-gray-200 bg-cover w-full">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-full">
                <div className="md:flex-start">
                    <a href="https://theskz.dev/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="logo.svg" className="h-8" alt="SKZ Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Klassenfurz</span>
                    </a>
                </div>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>
                    <div ref={targetEl} className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        {/* if logged in display user else links to login register */}
                        <div className="px-4 py-3">
                            { user != null && <>
                                <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>                                
                            </>}
                            { user == null && <>
                                <span className="block text-xs  text-gray-500 truncate dark:text-gray-400">Du bist nicht angemeldet</span>
                            </>}
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            { user != null && <>
                                <li>
                                    <Link href="/neu" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        Neuer Artikel
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/konto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        Konto
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        Abmelden
                                    </Link>
                                </li>
                            </>}
                            { user == null && <>
                                <li>
                                    <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        Anmelden
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        Registrieren
                                    </Link>
                                </li>
                            </>}
                        </ul>
                    </div>
                    <button ref={triggerEl} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
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
                            {getLink("/cbs", "Schule")}
                        </li>
                        <li>
                            {getLink("/about", "Über uns")}
                        </li>
                        <li>
                            {getLink("/kontakt", "Kontakt")}
                        </li>
                        {/* <li>
                            <button className="flex items-center justify-center px-3 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" onClick={toggleDarkMode}>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                                </svg>
                            </button>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar;