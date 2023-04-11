

export default  function Questions() {
    const questions = "Verificar comandos";

    const answer = [
        {id:1,value:"Comando 1 es verde",user:'Reyder',createdAt:'12/01/2023'},
        {id:2,value:"Comando 2 es azul",user:'Rolando',createdAt:'17/01/2023'},
        {id:3,value:"Comando 3 es rojo",user:'Roberto',createdAt:'17/01/2023'}
    ]


    const clasf = ['Buena','Regular','Mala'];

    return(
        <>
            <main className="grid h-screen bg-zinc-800 text-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/5 px-4">
                        <div className="backdrop-blur-md relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
                            <div className="flex-auto px-4 lg:px-10 py-10">
                                <div className="text-5xl">{questions}</div>
                                <div className="mt-10">Respuestas:</div>
                                {answer.map(v=>(
                                    <div className="flex m-4">
                                        <div className="lg:w-1/8 md:w-1/6  border-r-2 text-end pr-4">
                                            {v.user}
                                        </div>
                                        <p className="w-1/2 px-4 mr-5">
                                            {v.value}
                                        </p>
                                        <div className="flex gap-4 justify-self-end justify-center items-center">
                                            <label>Clasificacion</label>
                                             <select className="text-black rounded">
                                                 {clasf.map(v=>(
                                                     <option>{v}</option>
                                                 ))
                                                 }
                                             </select>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}