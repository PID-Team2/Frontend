/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import {
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const teams = [
        {name: "The best team"},
        {name: "Uci team"},
        {name: "PID Team"},
        {name: "CodeBrackets team"},
        {name: "Super Hero Game"},
    ]
    const projects = [
        {name: "Icons Library"},
        {name: "Coding Game"},
        {name: "PID Project"},
        {name: "Code brackets"},
        {name: "Super Hero Game"},
        {name: "Crazy Project"},
    ]
    return (
        <>
            <div className="side-bar md:left-0 md:block md:absolute md:top-16 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-md bg-zinc-850 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 md:pt-4 md:pb-8">
                <div className="md:flex-col md:items-stretch  md:flex-nowrap px-0 flex flex-wrap items-center justify-start w-full mx-auto">
                    {/* Toggler */}
                    <div className="flex lg:hidden mr-4">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Link
                        className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        to="/groups"
                    >
                        Home
                    </Link>
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-zinc-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        to="/groups"
                                    >
                                        Home
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-zinc-400 text-xs uppercase font-bold block pt-1 pb-4 no-underline flex justify-between items-center">
                            Your Teams
                            <Link
                                    to="/groups/add-group"
                                    className="bg-amber-400 text-zinc-800 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                >+ New
                            </Link>       
                        </h6>
                        {/* Teams */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                        {teams.map((team) => (
                            <li className="items-center" key={team.name}>
                                <Link
                                    className={
                                        "text-xs py-3 block text-white ml-3" 
                                    }
                                    to="/groups/list"
                                >
                                    {team.name}
                                </Link>
                            </li>
                        ))}
                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-zinc-400 text-xs uppercase font-bold block pt-1 pb-4 no-underline flex justify-between items-center">
                            Your Projects
                            <Link
                                    to="/groups/add-group"
                                    className="bg-amber-400 text-zinc-800 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                >+ New
                            </Link>       
                        </h6>
                        {/* Projects */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                        {projects.map((team) => (
                            <li className="items-center" key={team.name}>
                                <Link
                                    className={
                                        "text-xs py-3 block text-white ml-3" 
                                    }
                                    to="/groups/list"
                                >
                                    {team.name}
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
