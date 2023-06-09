import { Link, useParams } from "react-router-dom"
import { TrophyIcon, UserGroupIcon, BookmarkIcon, FlagIcon, BugAntIcon, RocketLaunchIcon, GlobeEuropeAfricaIcon, FireIcon, GiftIcon, PencilIcon, BeakerIcon, MoonIcon, HomeModernIcon} from "@heroicons/react/24/outline"
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../auth/authSlice";
import { selectPlayerById, erasePlayer } from "../playerSlice";
import { useNavigate } from "react-router-dom";

import '../assets/styles.css'

export default function GamePage() {
  const { playerId } = useParams();
  const authData = useSelector(selectAuth);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const player = useSelector(state => selectPlayerById(state, playerId))
  const totalXp = player? (player.level+1)*1000 : 1000
  const porcent = player? (player.xp*100)/totalXp : 0

  const handeDelete = () => {
    console.log("delete")
    const data = {
      user: authData.user,
      player: player
    }
    dispatch(erasePlayer(data))
    navigate('/games')
  }
  return (
    <>
      <main className="grid h-screen bg-zinc-800 text-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="bg-zinc-850 rounded-md p-4">
          <div className="w-full  flex items-end">
            <div className="inline-block h-10 w-10 rounded-full bg-zinc-700 ring-1 ring-zinc-400">
              <img
                className="inline-block h-10 w-10 rounded-full"
                src={`https://robohash.org/${player.name}`}
                alt=""
              />
            </div>
            <Link to={`/games/edit-player/${player.id}`}>
            <span className="text-xl ml-2 flex items-center hover:text-amber-300 cursor-pointer">{player.name}<PencilIcon className="ml-2 h-4"/></span>
            </Link>
          </div>
          <div className="w-full  p-4  flex">
            <div className="w-1/2">
              <div className="flex justify-between w-1/2"><span>LVL. {player ? player.level : ''} </span><span>{player.xp} / {totalXp} XP</span></div>
              <div className="bg-zinc-700 h-2 w-1/2">
                <div className={`bg-amber-400 h-full`} style={{width: porcent+'%'}}></div>
              </div>
            </div>
            <div>
            </div>
            <div className="w-1/2 text-sm flex items-center justify-end">
              <span className="text-sm flex items-center"><TrophyIcon className="h-8 mr-4" /> </span>
              <span className="text-sm flex items-center"><BookmarkIcon className="h-8 mr-4" /> </span>
              <span className="text-sm flex items-center"><UserGroupIcon className="h-10" /></span>
              <button onClick={handeDelete} className="button h-10 bg-zinc-600 w-10 flex items-center justify-center  ml-10">
                <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
              </button>
            </div>
          </div>
          <div className="h-full bg-zinc-700 flex p-4 justify-between">
            <Link to='level/1' className="flex flex-col items-center self-center">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <FlagIcon className=" h-8" />
              </div>
              <span className="mt-2">Hello <br/> World!</span>
            </Link>
            <div className="flex flex-col items-center self-end mb-16">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <BugAntIcon className=" h-8" />
              </div>
              <span className="mt-2">{player && player.level>0? 'Kill the bugs': '???'}</span>
            </div>
            <div className="flex flex-col items-center self-end mb-6">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <GiftIcon className=" h-8" />
              </div>
              <span className="mt-2">{player && player.level>1? 'The gift': '???'}</span>
            </div>

            <div className="flex flex-col items-center self-end mb-24">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <RocketLaunchIcon className=" h-8" />
              </div>
              <span className="mt-2">{player && player.level>2? 'Fix the rocket': '???'}</span>
            </div>
            <div className="flex flex-col items-center self-end mb-40">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <GlobeEuropeAfricaIcon className=" h-8" />
              </div>
              <span className="mt-2 text-center">{player && player.level>3? 'Explore the extrange planet': '???'}</span>
            </div>
            <div className="flex flex-col items-center self-center mb-16">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <FireIcon className=" h-8" />
              </div>
              <span className="mt-2 text-center">???</span>
            </div>
            <div className="flex flex-col items-center self-end mb-40">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <BeakerIcon className=" h-8" />
              </div>
              <span className="mt-2 text-center">???</span>
            </div>
            <div className="flex flex-col items-center self-center mb-32">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <MoonIcon className=" h-8" />
              </div>
              <span className="mt-2 text-center">???</span>
            </div>
            <div className="flex flex-col items-center self-center mb-46">
              <div className="p-3 rounded-md bg-amber-400 hover:bg-amber-500 cursor-pointer">
                <HomeModernIcon className=" h-8" />
              </div>
              <span className="mt-2 text-center">???</span>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}
