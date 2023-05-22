import { UserPlusIcon } from "@heroicons/react/24/outline"
export default function Group() {
    const people = [
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Courtney Henry',
            role: 'Designer',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Dries Vincent',
            role: 'Business Relations',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Lindsay Walton',
            role: 'Front-end Developer',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ]
    return (
        <>
            <div className="grid min-h-screen bg-zinc-850 px-6 py-4 lg:px-8 relative">
                <div className="bg-zinc-850 py-8 sm:py-32 px-4 md:px-5">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The best team</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                            suspendisse.
                        </p>
                    </div>
                    <div className="mx-auto">
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="flex items-center gap-x-6">
                                        <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                        <div>
                                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">{person.name}</h3>
                                            <p className="text-sm font-semibold leading-6 text-amber-400">{person.role}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            <li>
                                <div className="flex items-center gap-x-6">
                                    <div className="h-16 w-16 rounded-full bg-amber-400 flex justify-center items-center text-white">
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
