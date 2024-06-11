/*eslint-disable*/
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../auth/authSlice";
import { getGroups, selectAllGroups, eraseGroup } from "../groupsSlice";
import { useNavigate } from "react-router-dom";
import { eraseProject, getProjects, selectAllProjects } from "../projectSlice";
import { md5 } from "js-md5";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const authData = useSelector(selectAuth);
  const groupData = useSelector(selectAllGroups);
  const projectsData = useSelector(selectAllProjects);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (team) => {
    dispatch(
      eraseGroup({
        group: { ...team },
        user: authData.user,
      })
    );

    navigate("/groups/list");
  };
  const handleDeleteProject = (project) => {
    dispatch(
      eraseProject({
        project: { ...project },
        user: authData.user,
      })
    );

    navigate("/groups/list");
  };
  useEffect(() => {
    if (authData.user && groupData.status === "idle") {
      dispatch(getGroups(authData.user));
    }
    if (authData.user && projectsData.status === "idle") {
      dispatch(getProjects(authData.user));
    }
  }, [authData.user, dispatch]);

  return (
    <>
      <div className="side-bar md:left-0 md:block md:absolute md:top-16 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-md bg-zinc-850 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 md:pt-4 md:pb-8">
        <div className="md:flex-col md:items-stretch  md:flex-nowrap px-0 flex flex-wrap items-center justify-start w-full mx-auto">
          {/* Toggler */}
          <div className="flex lg:hidden mr-4">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
            >
              <span className="sr-only">Ábrir menú principal</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Link
            className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/groups"
          >
            Gestionar Grupos
          </Link>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-zinc-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/groups"
                  >
                    Inicio
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-zinc-400 text-xs uppercase font-bold block pt-1 pb-4 no-underline flex justify-between items-center">
              Tus grupos
              <Link
                to="/groups/add-group"
                className="bg-amber-400 text-zinc-800 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              >
                + Add
              </Link>
            </h6>
            {/* Teams */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {groupData.groups.length > 0 ? (
                groupData.groups.map((team) => (
                  <li
                    className="items-center flex justify-between"
                    key={team.id}
                  >
                    <Link
                      className={"text-xs py-3 block text-white mx-3"}
                      to={`/groups/list/${team.id}`}
                    >
                      <span className="flex items-center gap-2">
                        <img
                          src={`https://www.gravatar.com/avatar/${md5(
                            team.title
                          )}?d=retro&f=y&s=128/`}
                          alt="person"
                          className="h-5 w-5 flex-shrink-0 rounded-full"
                        />
                        {team.title}
                      </span>
                    </Link>
                    {team.user.id == authData.user.id && (
                      <TrashIcon
                        onClick={() => handleDelete(team)}
                        className="h-4 w-4 text-white hover:text-amber-400 cursor-pinter"
                      />
                    )}
                  </li>
                ))
              ) : groupData.state == "loading" ? (
                <span className="text-zinc-600">
                  Cargando vista, porfavor espere unos segundos...
                </span>
              ) : (
                <span className="text-zinc-600">
                  No hay grupos creados aún..
                </span>
              )}
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-zinc-400 text-xs uppercase font-bold block pt-1 pb-4 no-underline flex justify-between items-center">
              Tus proyectos
              <Link
                to="/groups/add-project"
                className="bg-amber-400 text-zinc-800 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              >
                + Add
              </Link>
            </h6>
            {/* Projects */}
            <ul>
              {projectsData.projects?.length > 0 ? (
                projectsData.projects.map((project) => (
                  <li
                    className="items-center flex justify-between"
                    key={project.id}
                  >
                    <Link
                      className={"text-xs py-3 block text-white mx-3"}
                      to={`/groups/project/${project.id}`}
                    >
                      {project.title}
                    </Link>
                    {project.group.userAdminId == authData.user.id && (
                      <TrashIcon
                        onClick={() => handleDeleteProject(project)}
                        className="h-4 w-4 text-white hover:text-amber-400 cursor-pinter"
                      />
                    )}
                  </li>
                ))
              ) : groupData.state == "loading" ? (
                <span className="text-zinc-600">
                  Cargando vista, porfavor espere unos segundos...
                </span>
              ) : (
                <span className="text-zinc-600">
                  No hay grupos creados aún..
                </span>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
