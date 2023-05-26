import { UserPlusIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../auth/authSlice";
import { selectAll, getPlayers } from "../playerSlice";
import { useEffect } from "react";

export default function NoPlayerView() {
    const authData = useSelector(selectAuth);
    const dispatch = useDispatch();
    const playerData = useSelector(selectAll)

    useEffect(() => {
        if (authData.user && playerData.status == "idle") {
            dispatch(getPlayers(authData.user))
        }
    }, [authData.user, dispatch])

    return (
        <>
            <div className="grid min-h-screen bg-zinc-850 px-6 py-4 lg:px-8 relative">
                <div className="bg-zinc-850 py-8 sm:py-32 px-4 md:px-5">
                    <div className="text-center mb-8">
                        <p className="mt-6 text-xl leading-8 text-gray-300">
                            Select a player first
                        </p>
                    </div>
                    <div className="flex pa-5 justify-center">
                        {playerData.status == "loading"
                            ? 'Loading...'
                            : playerData.players.length
                                ? playerData.players.map((player) => (
                                    <Link to={`/game/${player.id}`} key={player.id}>
                                        <div className="flex flex-col items-center text-white mx-5">
                                            <div className="inline-block h-16 w-16 rounded-full bg-zinc-700 ring-1 ring-zinc-400">
                                            <img
                                                className="inline-block h-16 w-16 rounded-full"
                                                src={`https://robohash.org/${player.name}`}
                                                alt=""
                                            />
                                            </div>
                                            <span className="text-lg mt-1">{player.name}</span>
                                            <span className="text-xs text-amber-300" >lvl {player.level}</span>
                                        </div>
                                    </Link>
                                )) : ''
                        }
                    </div>
                    <div className="flex justify-center mt-10"><Link to="add-player" className="text-white text-center  ring-1 ring-zinc-300 py-2 px-3 rounded-md hover:bg-zinc-700">Add player</Link></div>
                </div>
            </div>
        </>
    )
}
