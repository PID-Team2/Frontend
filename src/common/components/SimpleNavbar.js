/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

import {
    Bars3Icon,
} from '@heroicons/react/24/outline'

export default function SimpleNavbar(props) {
    //const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-10 py-3 navbar-expand-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-white text-sm font-bold leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap"
                            to="/"
                        >
                            <img className="h-8 w-auto mr-4" src="https://tailwindui.com/img/logos/mark.svg?color=amber&shade=400" alt="" />
                            StackOverflowUCI
                        </Link>
                        
                    </div>
                </div>
            </nav>
        </>
    );
}
