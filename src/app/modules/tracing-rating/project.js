
import {LockClosedIcon} from "@heroicons/react/20/solid";
import {useState} from "react";



export default function Project() {

    const [search,setSearch] = useState();
    const [advanced,setAdvanced] = useState(false);

    const optionsMaterias = [
        {value:1, label:'Matematica'},
        {value:2, label:'Ingeneria de Software'},
        {value:3, label:'Programacion'},
        {value:4, label:'IA'},
        {value:5, label:'PE'}
    ]
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(advanced);
        return
    }
     return(
         <>
             <main className="grid h-screen bg-zinc-800 text-white px-6 py-24 sm:py-32 lg:px-8">
                 <div className="flex content-center items-center justify-center h-full">
                     <div className="w-full lg:w-4/12 px-4">
                         <div className="backdrop-blur-md relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
                             <div className="flex-auto px-4 lg:px-10 py-10">

                                 <form onSubmit={handleSubmit}>

                                         <input
                                             className="text-black rounded w-full"
                                             type="text" placeholder="Search here..."
                                             value={search}
                                             onChange={event=>setSearch(event.target.value)}
                                         />

                                         <div className="flex mt-4" >
                                             <label className="mr-2 ">Advanced</label>
                                             <input type="checkbox"
                                                        checked={advanced}
                                                    onChange={event=>setAdvanced(!advanced)}
                                             />
                                         </div>

                                     {advanced &&
                                         <div className="flex  mt-4 text-black gap-2">
                                             <div className="w-1/2">
                                                 <label form="material" className="text-white">Materias:</label>
                                                 <select className="text-black w-full rounded" >
                                                     {optionsMaterias.map((option) => (
                                                         <option value={option.value}>{option.label}</option>
                                                     ))}
                                                 </select>
                                             </div>
                                             <div className="w-1/2">
                                                 <label form="author" className="text-white">Author:</label>
                                                 <input
                                                     className="text-black rounded w-full"
                                                     type="text" placeholder="Search here..."
                                                     value={search}
                                                     onChange={event=>setSearch(event.target.value)}
                                                 />
                                             </div>
                                         </div>

                                     }





                                     <div className="text-center mt-6">
                                         <button
                                             type="submit"
                                             className="group relative flex w-full justify-center rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                                         >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-amber-500 group-hover:text-amber-300" aria-hidden="true" />
                                    </span>
                                             Search
                                         </button>
                                     </div>
                                 </form>
                             </div>
                         </div>

                     </div>
                 </div>
             </main>

         </>
     )


}