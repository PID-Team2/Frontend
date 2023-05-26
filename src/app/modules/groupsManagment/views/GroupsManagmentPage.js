import { Link } from "react-router-dom"
import '../assets/styles/index.css'
import { UserGroupIcon, BriefcaseIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function GroupsManagmentPage() {

  return (
    <>
      <main className="h-[32rem]">
      <div className='main backdrop-blur-sm h-full bg-fixed bg-no-repeat bg-center text-white flex justify-center items-center'>
        <header className="m-0 flex justify-center px-10">
          <div className='home-title flex flex-col justify-center text-center'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl text-center mb-8'>
                Manage your team
            </h1>
            <h2 className='text-xl md:text-2xl lg:text-3xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          </div>
        </header>
      </div>
      </main>
      <section className="bg-white min-h-screen text-zinc-850  pt-4">
      <div className="container mx-auto px-4 lg:pt-24 text-zinc-850">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-zinc-850">
                  What you can do?
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Sed arcu non odio euismod lacinia at quis risus. Odio ut sem nulla pharetra.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <Link to="add-group" className="text-amber-600 p-3 w-12 h-12 shadow-lg rounded-full bg-amber-200  hover:bg-amber-400 hover:text-white inline-flex items-center justify-center">
                  <UserGroupIcon/>
                </Link>
                <h6 className="text-xl mt-5 font-semibold">
                  Create a team
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                In eu mi bibendum neque egestas congue quisque egestas. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Auctor augue mauris augue neque
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <Link to="add-prject" className="text-amber-600 p-3 w-12 h-12 shadow-lg rounded-full bg-amber-200  hover:bg-amber-400 hover:text-white inline-flex items-center justify-center">
                  <BriefcaseIcon/>
                </Link>
                <h5 className="text-xl mt-5 font-semibold">
                  Start a project
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Sed arcu non odio euismod lacinia at quis risus. Odio ut sem nulla pharetra.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <Link to="versions" className="text-amber-600 p-3 w-12 h-12 shadow-lg rounded-full bg-amber-200  hover:bg-amber-400 hover:text-white inline-flex items-center justify-center">
                <WrenchScrewdriverIcon/>
                </Link>
                <h5 className="text-xl mt-5 font-semibold">
                  Version control
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Sed arcu non odio euismod lacinia at quis risus. Odio ut sem nulla pharetra.
                </p>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}
