"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
    <>
        {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
        <Navbar />
    </>
    );
}