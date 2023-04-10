import { Link } from "react-router-dom"
import { TrophyIcon, UserGroupIcon, BookmarkIcon, FlagIcon, BugAntIcon, RocketLaunchIcon, GlobeEuropeAfricaIcon, FireIcon, GiftIcon } from "@heroicons/react/24/outline"
export default function GamePage() {
  return (
    <>
      <main className="grid h-screen bg-zinc-800 text-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="bg-zinc-850 rounded-md p-4">
          <div className="w-full  p-4  flex">
            <div className="w-1/2">
              <div className="flex justify-between w-1/2"><span>LVL. 5 </span><span>170 / 210 XP</span></div>
              <div className="bg-zinc-700 h-2 w-1/2">
                <div className="bg-amber-400 h-full w-3/4"></div>
              </div>
            </div>
            <div className="w-1/2 text-sm flex items-center justify-end">
              <span className="text-sm flex items-center"><TrophyIcon className="h-8 mr-4" /> </span>
              <span className="text-sm flex items-center"><BookmarkIcon className="h-8 mr-4" /> </span>
              <span className="text-sm flex items-center"><UserGroupIcon className="h-10" /></span>
            </div>
          </div>
          <div className="h-full bg-zinc-700 flex p-4 justify-between">
            <div className="flex flex-col items-center self-center">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <FlagIcon className=" h-8" />
              </div>
              <span className="mt-2">Start!</span>
            </div>
            <div className="flex flex-col items-center self-end mb-4">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <BugAntIcon className=" h-8" />
              </div>
              <span className="mt-2">Kill the bugs</span>
            </div>
            <div className="flex flex-col items-center mt-20">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <GiftIcon className=" h-8" />
              </div>
              <span className="mt-2">The gift</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <RocketLaunchIcon className=" h-8" />
              </div>
              <span className="mt-2">Fix the rocket</span>
            </div>
            <div className="flex flex-col items-center self-center w-36">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <GlobeEuropeAfricaIcon className=" h-8" />
              </div>
              <span className="mt-2 text-center">Explore the extrange planet</span>
            </div>
            <div className="flex flex-col items-center self-center w-32">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <FireIcon className=" h-8" />
              </div>
              <span className="mt-2 text-center">???</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
