
import {useNavigate} from "react-router-dom";

export default  function Questions() {

    const answer = [
        {id:1,question:"Verificar comandos",user:'Reyder',createdAt:'12/01/2023'},
        {id:1,question:"Capacitar",user:'Rolando',createdAt:'17/01/2023'},
        {id:1,question:"Estudiar react",user:'Roberto',createdAt:'17/01/2023'}
    ]
    const navigate = useNavigate();
    const handleAnswer = function (){
        navigate('/answare');
    }

    return(
        <>
            <main className="grid h-screen bg-zinc-800 text-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/5 px-4">
                        <div className="backdrop-blur-md relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
                            <div className="flex-auto px-4 lg:px-10 py-10">
                                <div>Resultado:</div>
                                <table className="table-fixed w-full mt-4">
                                    <thead>
                                    <tr>
                                        <th>
                                            Pregunta
                                        </th>
                                        <th>
                                            Usuario
                                        </th>
                                        <th>
                                            Fecha
                                        </th>
                                        <th>
                                            Opcion
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {answer.map(v=>(
                                        <tr className="mt-4 border-b-2 text-center">
                                            <td>
                                                {v.question}
                                            </td>
                                            <td>
                                                {v.user}
                                            </td>
                                            <td>
                                                {v.createdAt}
                                            </td>
                                            <td>
                                                <div className="flex justify-center  text-center">
                                                    <button
                                                        type="button"
                                                        onClick={handleAnswer}
                                                        className=" flex w-1/2 justify-center rounded-md bg-amber-400 px-2 py-2 text-sm font-semibold text-white hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                                                    >

                                                    Ir
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}