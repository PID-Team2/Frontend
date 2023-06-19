/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AccountDropdown from "../../../../common/components/AccountDropdown";
import { logout, selectAuth } from "../../auth/authSlice";

// components

import {
    Bars3Icon,
} from '@heroicons/react/24/outline'

export default function Navbar({dark}) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
   
const authData = useSelector(selectAuth);

const dispatch = useDispatch();
const handleLogOut = () => {
    dispatch(logout())
  }

    return (
        <>
            <nav className={"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-zinc-850"+ (dark ? "":"bg-transparent backdrop-blur-sm")}>
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-white text-sm font-bold leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap"
                            to="/"
                        >
                            <img className="h-8 w-auto mr-4" src="https://tailwindui.com/img/logos/mark.svg?color=amber&shade=400" alt="" />
                            StackOverflowUCI
                        </Link>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? " block rounded shadow-lg" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <Link
                                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    to="/groups/list"
                                >
                                    Teams & Projects
                                </Link>
                            </li>

                            <li className="flex items-center">
                                <div
                                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    
                                >
                                    <AccountDropdown username={authData.user.username} onLogout={handleLogOut}/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
