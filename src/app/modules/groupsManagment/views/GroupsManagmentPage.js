import { Link } from "react-router-dom"
import '../assets/styles/index.css'
import { UserGroupIcon, BriefcaseIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function GroupsManagmentPage() {

  return (
    <>
      <main className="h-[32rem]">
      <div className='main backdrop-blur-sm h-full bg-fixed bg-no-repeat bg-center text-white flex justify-center items-center'>
        <header className="m-0 flex justify-center px-10">
          <div className='home-title flex flex-col justify-center text-center'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl text-center mb-8'>
              Gestiona tu espacio
            </h1>
            <h2 className='text-xl md:text-2xl lg:text-3xl text-center px-24'>
              
              
              En equipo, transformamos líneas de código en soluciones innovadoras y desafiamos los límites de lo posible.
            </h2>
          </div>
        </header>
      </div>
      </main>
      <section className="bg-white min-h-screen text-zinc-850  pt-4">
      <div className="container mx-auto px-4 lg:pt-24 text-zinc-850 pb-20">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-zinc-850">
                ¿Qué podrás hacer?
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400 px-8">
                StackOverFlowUCI, es una plataforma donde podrás crear o unirte a grupos de trabajo colaborativo de diferentes materias que se imparten en la Universidad, iniciar nuevos proyectos, coordinar tareas y controlar las versiones de tus proyectos de manera eficiente y efectiva. Con nuestras herramientas integradas, podrás potenciar la colaboración, la creatividad y el éxito en tus iniciativas, ya sea en el ámbito de la programación u otras disciplinas.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <Link to="add-group" className="text-amber-600 p-3 w-12 h-12 shadow-lg rounded-full bg-amber-200  hover:bg-amber-400 hover:text-white inline-flex items-center justify-center">
                  <UserGroupIcon/>
                </Link>
                <h6 className="text-xl mt-5 font-semibold">
                  Crear Grupos
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                En nuestra plataforma, puedes formar grupos de trabajo colaborativo donde los miembros puedan compartir ideas, resolver problemas y avanzar juntos hacia objetivos comunes.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <Link to="add-prject" className="text-amber-600 p-3 w-12 h-12 shadow-lg rounded-full bg-amber-200  hover:bg-amber-400 hover:text-white inline-flex items-center justify-center">
                  <BriefcaseIcon/>
                </Link>
                <h5 className="text-xl mt-5 font-semibold">
                  Crear o unirte a proyectos
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Con nuestra plataforma, puedes iniciar nuevos proyectos o unirte a ellos y coordinar el trabajo de equipo de manera eficiente y efectiva. 
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <Link to="versions" className="text-amber-600 p-3 w-12 h-12 shadow-lg rounded-full bg-amber-200  hover:bg-amber-400 hover:text-white inline-flex items-center justify-center">
                <WrenchScrewdriverIcon/>
                </Link>
                <h5 className="text-xl mt-5 font-semibold">
                  Controlar las versiones de tu proyecto
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Nuestra plataforma te permite gestionar y controlar las versiones de tus proyectos, facilitando la colaboración y garantizando la integridad del trabajo realizado.
                </p>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}
