import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPlayerById } from "../playerSlice";
import Typewriter from 'typewriter-effect';
import { useRef, useState, useEffect } from "react";

export default function Level1() {
    const { playerId } = useParams();
    const player = useSelector(state => selectPlayerById(state, playerId))

    const npcDialog = [
        "¡Hola! Pareces estar herido. ¿Necesitas ayuda?",
        "Estás en un planeta alejado de cualquier ruta conocida. Mi nave también tuvo problemas y aterricé aquí hace unos años. Desde entonces, he estado estudiando este planeta y tratando de encontrar una manera de salir. ¿Cómo llegaste aquí?",
        "Lo siento, pero este planeta tiene un campo de energía que bloquea las señales de radio y cualquier otra forma de comunicación hacia el espacio exterior. Pero no te preocupes, podemos trabajar juntos para encontrar una solución. ¿Cómo te llamas?",
        `Soy un robot explorador diseñado para la investigación científica. Pero puedes llamarme X5. Bienvenido a este planeta, ${player.name}.`,
        "He encontrado esta radio en una nave antigua, por la tecnología que usa parece ser de una civilizacion muy avanzada, ayer he terminado de repararla pero no consigo descifrar como funciona, si logras desifrar como esta configurada podriamos probarla",
        ""
    ]
    const playerDialog = [
        "¿Dónde estoy? ¿Qué es este lugar?",
        "Tuve un accidente en mi nave y caí aquí. ¿Hay alguna forma de comunicarme con mi nave o pedir ayuda?",
        `Soy ${player.name}. ¿Y tú?`,
        "Al parecer esta maquina recibe una especie de sintas con valores escritos en ella los cuales procesa para devolverlos modificados en ella..."
    ]
    const [end, setEnd] = useState(false);
    const [showDialog, setShowDialog] = useState(true);
    const [boardintro, setBoardIntro] = useState(0)
    return (
        <>
            <main className="flex flex-col h-full level1-page bg-zinc-800 text-white px-6 sm:pt-32 lg:px-8 w-full pb-12">
                {showDialog ?
                    <div className="flex w-full backdrop-opacity-10 backdrop-invert mt-64 bg-white/10 pb-16 h-1/2 self-end mb-4 rounded-md">
                        <div className="flex  w-1/2 mr-5">
                            <p className="text-4xlfont-semibold text-amber-400"></p>
                            <div className="mt-10 flex items-center self-end mb-4">
                                <img
                                    className="inline-block"
                                    src="https://robohash.org/12-1-19970000"
                                    alt="Him"
                                    style={{ minWidth: '150px', width: '150px' }}
                                />
                            </div>
                            <div className="bg-zinc-700 rounded-xl rounded-tl-sm px-4 py-1 self-end">
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(npcDialog[0])
                                            .pauseFor(2500)
                                            .deleteAll(8)
                                            .pauseFor(4000)
                                            .typeString(npcDialog[1])
                                            .pauseFor(2500)
                                            .deleteAll(8)
                                            .pauseFor(4200)
                                            .typeString(npcDialog[2])
                                            .pauseFor(2500)
                                            .deleteAll(8)
                                            .pauseFor(3000)
                                            .typeString(npcDialog[3])
                                            .pauseFor(2500)
                                            .deleteAll(8)
                                            .start();
                                    }}
                                    options={{
                                        delay: 60,
                                        cursor: ''
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex text-center w-1/2 justify-end items-end">
                            <div className="bg-zinc-700 mt-8 rounded-xl rounded-tr-sm px-4 py-1">
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(6500)
                                            .typeString(playerDialog[0])
                                            .pauseFor(2500)
                                            .deleteAll(8)
                                            .pauseFor(17000)
                                            .typeString(playerDialog[1])
                                            .pauseFor(2500)
                                            .deleteAll(8)
                                            .pauseFor(22000)
                                            .typeString(playerDialog[2])
                                            .pauseFor(2500)
                                            .deleteAll(8)
                                            .pauseFor(13000)
                                            .typeString(playerDialog[3])
                                            .pauseFor(2500)
                                            .deleteAll(8)
                                            .callFunction(() => {
                                                console.log('All strings were deleted')
                                                setEnd(true)
                                            }
                                            )
                                            .start();
                                    }}
                                    options={{
                                        delay: 60,
                                        cursor: ''
                                    }}
                                />
                            </div>
                            <div className="mb-4 flex items-center justify-center">
                                <img
                                    className="inline-block"
                                    src={`https://robohash.org/${player.name}`}
                                    alt="player"
                                    style={{ minWidth: '150px', width: '150px' }}
                                />
                            </div>
                        </div>
                    </div>
                    : <div className="flex w-full backdrop-opacity-10 backdrop-invert bg-white/10 p-4 h-full mb-4 rounded-md">
                        {boardintro === 0 ?
                            <div className="flex h-min items-center">
                                <div className="mt-10 flex items-center h-min self-end mb-4">
                                    <img
                                        className="inline-block"
                                        src="https://robohash.org/12-1-19970000"
                                        alt="Him"
                                        style={{ minWidth: '80px', width: '80px' }}
                                    />
                                </div>
                                <div className="bg-zinc-700 mt-8 rounded-xl rounded-bl-sm px-4 py-1 self-top">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter
                                                .typeString(npcDialog[4])
                                                .pauseFor(2500)
                                                .deleteAll(12)
                                                .callFunction(() =>
                                                    setBoardIntro(boardintro + 1)
                                                )
                                                .start();
                                        }}
                                        options={{
                                            delay: 60,
                                            cursor: ''
                                        }}
                                    />
                                </div>
                            </div>
                            : boardintro === 1 ?
                                <div className="flex h-min items-center w-full">
                                    <div className="bg-zinc-700 mt-8 rounded-xl rounded-tr-sm px-4 py-1 self-top w-full">
                                        <Typewriter
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString(playerDialog[3])
                                                    .pauseFor(2500)
                                                    .deleteAll(12)
                                                    .callFunction(() =>
                                                        setBoardIntro(boardintro + 1)
                                                    )
                                                    .start();
                                            }}
                                            options={{
                                                delay: 60,
                                                cursor: ''
                                            }}
                                        />
                                    </div>
                                </div>
                                :
                                <div className="flex w-full">
                                    <div className="w-2/3 flex flex-col  mr-2">
                                        <div className="h-2/3 bg-zinc-800 mb-1 rounded-md p-3 flex flex-col">
                                            <span className="mb-5 text-gray-white text-3xl">Hello, World!</span>
                                            <span className="mb-4 text-gray-300">Imprima en la salida todos los valores de la entrada </span>
                                            <span className="mb-2">Input:</span>
                                            <span>1 2 3 4</span>
                                        </div>
                                        <div className="h-1/3 bg-zinc-900 rounded-md p-2">Output:</div>
                                    </div>
                                    <div className="w-1/3 bg-zinc-850 h-full rounded-md p-3  flex flex-col">
                                        <div className="h-1/3  mb-1 rounded-md">
                                            <span>Comands:</span>
                                            <div className="w-full flex flex-col items-start mt-4">
                                                <div className="flex items-start mb-3">
                                                    <span className="px-2 py-1 rounded-lg bg-amber-400">in</span>
                                                    <span className="text-gray-300 ml-4 text-sm">Este comando se utiliza para tomar un valor de la entrada</span>
                                                </div>
                                                <div className="mb-2 flex items-start">
                                                    <span className="px-2 py-1 rounded-lg bg-amber-400">out</span>
                                                    <span className="text-gray-300 ml-4 text-sm">Este se usa para devolver un valor en la salida</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-2/3 border-solid border-2 border-amber-400 rounded-md p-2"></div>
                                    </div>
                                </div>
                        }
                    </div>
                }
                <div className="">
                    <Link to={`/game/${player.id}`} className="px-8 py-2 bg-white text-zinc-850 rounded-md">
                        Back
                    </Link>
                    {showDialog &&
                        <button onClick={() => setShowDialog(false)} className="ml-4 px-8 py-2 bg-white text-zinc-850 rounded-md">
                            {end ? "Continue" : "Skip"}
                        </button>
                    }
                </div>
            </main>
        </>
    )
}
