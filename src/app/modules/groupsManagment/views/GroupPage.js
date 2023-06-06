import { UserPlusIcon, PencilIcon } from "@heroicons/react/24/outline"
import { useSelector, useDispatch } from "react-redux"
import { selectgroupById } from "../groupsSlice"
import { Link, useParams } from "react-router-dom"
import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { inviteUser } from "../groupsSlice"
import { selectAuth } from "../../auth/authSlice";
import { selectAllUsers, getUsers } from "../../auth/usersSlice"

const people = [
    {
        id: 1,
        name: 'Wade Cooper',
        avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Arlene Mccoy',
        avatar:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 3,
        name: 'Devon Webb',
        avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
    {
        id: 4,
        name: 'Tom Cook',
        avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 5,
        name: 'Tanya Fox',
        avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 6,
        name: 'Hellen Schmidt',
        avatar:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 7,
        name: 'Caroline Schultz',
        avatar:
            'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 8,
        name: 'Mason Heaney',
        avatar:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 9,
        name: 'Claudie Smitham',
        avatar:
            'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 10,
        name: 'Emil Schaefer',
        avatar:
            'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Group() {
    const { groupId } = useParams();

    const dispatch = useDispatch()
    const authData = useSelector(selectAuth);

    const [selected, setSelected] = useState(null)
    const [showSelect, setShowSelect] = useState(false)

    const group = useSelector(state => selectgroupById(state, groupId))
    const userData = useSelector(selectAllUsers);
    
    const handleInvite = () => {
        if(selected){
            const data = {
                group,
                auth: authData.user,
                user: selected
            }
            dispatch(inviteUser(data))
            setShowSelect(false)
            setSelected(null)
        }else{
            console.log(selected)
        }
    }

    useEffect(() => {
        if (userData.status == "idle") {
              dispatch(getUsers())
        }
        console.log(userData.users)
    }, [dispatch, userData.status])

    return (
        <>
            <div className="grid min-h-screen bg-zinc-850 px-6 py-4 lg:px-8 relative">
                <div className="bg-zinc-850 py-8 sm:py-32 px-4 md:px-5">
                    <div className="text-center mb-8">
                        <Link to={`/groups/edit-group/${group.id}`}>
                            <h2 className="text-3xl font-bold text-white sm:text-4xl flex justify-center items-center hover:text-amber-300 hover:cursor-pointer">{group && group.title}<PencilIcon className="ml-2 h-7" /></h2>
                        </Link>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            {group ? group.description : '404'}
                        </p>
                    </div>
                    <div className="mx-auto">
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                            {group &&
                                group.users.map((person) => (
                                    <li key={person.id}>
                                        <div className="flex items-center gap-x-6">
                                            <div className="max-h-16 max-w-16 rounded-full bg-zinc-700"><img className="h-16 w-16 rounded-full" src={`https://api.multiavatar.com/${person.username}.png`} alt={person.username} /></div>
                                            <div>
                                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">{person.username}</h3>
                                                <p className="text-sm font-semibold leading-6 text-amber-400">No Role</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            <li>
                                <div className="flex items-center gap-x-6">
                                    <div onClick={()=> setShowSelect(true)} className="h-16 w-16 rounded-full bg-amber-400 flex justify-center items-center text-white cursor-pointer">
                                        <UserPlusIcon className="h-1/2" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">Add member</h3>
                                        <p className="text-sm font-semibold leading-6 text-amber-400">Invite a new colaborator</p>
                                    </div>
                                </div>
                            </li>
                            {showSelect &&
                                <li className="flex items-end">
                                <div className="w-2/3">
                                <Listbox value={selected} onChange={setSelected}>
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-300">Invite user</Listbox.Label>
                                            <div className="relative mt-2">
                                                <Listbox.Button className="relative w-full cursor-default rounded-md bg-zinc-600 py-1.5 pl-3 pr-10 text-left text-gray-100 shadow-sm ring-1 ring-inset ring-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 sm:text-sm sm:leading-6">
                                                    <span className="flex items-center">
                                                    {selected&& <img src={`https://api.multiavatar.com/${selected.username}.png`} alt="person" className="h-5 w-5 flex-shrink-0 rounded-full" />}
                                                        <span className="ml-3 block truncate">{selected? selected.username:'Search an user...'}</span>
                                                    </span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-zinc-600 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {userData.users.filter(u => !group.users.find(us => us.id == u.id) && u.id !=authData.user.id).map((user) => (
                                                            <Listbox.Option
                                                                key={user.id}
                                                                className={({ active }) =>
                                                                    classNames(
                                                                        active ? 'bg-amber-400 text-white' : 'text-gray-300',
                                                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={user}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <>
                                                                        <div className="flex items-center">
                                                                            <img src={`https://api.multiavatar.com/${user.username}.png`} alt="person" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                                                            <span
                                                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                            >
                                                                                {user.username}
                                                                            </span>
                                                                        </div>

                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active ? 'text-white' : 'text-amber-400',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                )}
                                                                            >
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                                </div>
                                <button
                                    onClick={handleInvite}
                                    className="bg-amber-400 text-zinc-800 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2.5 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                > Invite
                            </button>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
