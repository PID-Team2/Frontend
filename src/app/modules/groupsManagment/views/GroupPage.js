import { UserPlusIcon } from "@heroicons/react/24/outline"
import { useSelector } from "react-redux"
import { selectgroupById } from "../groupsSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
export default function Group() {
  const { groupId } = useParams();
    
  const group  = useSelector(state => selectgroupById(state, groupId))

  useEffect(() => {

    console.log(group)
    
  }, [groupId]);

    return (
        <>
            <div className="grid min-h-screen bg-zinc-850 px-6 py-4 lg:px-8 relative">
                <div className="bg-zinc-850 py-8 sm:py-32 px-4 md:px-5">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{group && group.title}</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            {group? group.description: '404'}
                        </p>
                    </div>
                    <div className="mx-auto">
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                            {group && 
                            group.users.map((person) => (
                                <li key={person.id}>
                                    <div className="flex items-center gap-x-6">
                                        <div className="h-16 w-16 rounded-full bg-zinc-700"><img className="h-16 w-16 rounded-full" src={`https://robohash.org/${person.username}`} alt={person.username} /></div>
                                        <div>
                                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">{person.username}</h3>
                                            <p className="text-sm font-semibold leading-6 text-amber-400">No Role</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            <li>
                                <div className="flex items-center gap-x-6">
                                    <div className="h-16 w-16 rounded-full bg-amber-400 flex justify-center items-center text-white cursor-pointer">
                                        <UserPlusIcon className="h-1/2"/>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">Add member</h3>
                                        <p className="text-sm font-semibold leading-6 text-amber-400">Invite a new colaborator</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
