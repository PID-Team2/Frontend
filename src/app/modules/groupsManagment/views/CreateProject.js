import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../auth/authSlice";
import { addNewProject, editProject, selectProjectById } from "../projectSlice";
import { getGroups, selectAllGroups, selectgroupById } from "../groupsSlice";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { md5 } from "js-md5";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateProject() {
  const { projectId } = useParams();
  const groupData = useSelector(selectAllGroups);
  const projectToEdit = useSelector((state) =>
    selectProjectById(state, projectId ?? -1)
  );

  const selectedGroup = useSelector((state) =>
    selectgroupById(state, projectId ? projectToEdit?.groupId : null)
  );

  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: projectToEdit ? projectToEdit.title : "",
    description: projectToEdit ? projectToEdit.description : "",
  });

  const [errorMessages, setErrorMessages] = useState({
    title: "",
    group: "",
  });
  const [selected, setSelected] = useState(
    projectToEdit ? selectedGroup : null
  );
  const authData = useSelector(selectAuth);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
    setErrorMessages({ ...errorMessages, title: "" });
  };
  useEffect(() => {
    if (authData.user && groupData.status === "idle") {
      dispatch(getGroups(authData.user));
    }
  }, [authData.user, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    project.groupId = selected.id;
    if (isValid) {
      const data = {
        project: project,
        user: authData.user,
      };
      if (projectToEdit) {
        const dataToEdit = {
          project: { ...data.project, id: projectToEdit.id },
          user: authData.user,
        };

        dispatch(editProject(dataToEdit));
      } else dispatch(addNewProject(data));

      navigate("/groups/list");
    }
    return;
  };

  const validate = () => {
    const { title } = project;
    if (title.length < 3) {
      setErrorMessages({
        ...errorMessages,
        title: "Al menos 3 caracteres",
      });
      return false;
    }
    if (!selected) {
      setErrorMessages({
        ...errorMessages,
        group: "Selecciona un grupo",
      });
      return false;
    }

    return true;
  };
  useEffect(() => {
    if (selected) setErrorMessages({ ...errorMessages, group: "" });
  }, [selected]);

  return (
    <>
      <div className="overflow-y-auto flex flex-center bg-zinc-850 text-white px-6 sm:pt-24 lg:px-24">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
          <div className="rounded-t bg-zinc-850 mb-0 px-6 py-6">
            <div className=" text-center flex justify-between">
              <h6 className="text-white text-xl font-bold">Crear proyecto</h6>
            </div>
          </div>
          <hr className="mb-6 border-b-1 border-zinc-500" />
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Información del grupo
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-zinc-200 text-xs font-bold mb-2"
                      htmlFor="title"
                    >
                      Nombre
                    </label>
                    <input
                      onChange={handleChange}
                      value={project.title}
                      type="text"
                      name="title"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-zinc-100 bg-zinc-700 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                      placeholder="Nombre del proyecto"
                    />
                    <div className="text-red-400 text-xs mt-1">
                      {errorMessages.title}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap w-full">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="description"
                      >
                        Descripción
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={project.description}
                        className="border-0 placeholder-gray-300 text-zinc-100 bg-zinc-700 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                        rows="4"
                        placeholder="Descripción del proyecto"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-300">
                              Añadir integrantes al grupo
                            </Listbox.Label>
                            <div className="relative mt-2">
                              <Listbox.Button className="relative w-full cursor-default rounded-md bg-zinc-600 py-1.5 pl-3 pr-10 text-left text-gray-100 shadow-sm ring-1 ring-inset ring-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                  {selected && (
                                    <img
                                      src={`https://www.gravatar.com/avatar/${md5(
                                        selected.title
                                      )}?d=retro&f=y&s=128/`}
                                      alt="intengrante"
                                      className="h-5 w-5 flex-shrink-0 rounded-full"
                                    />
                                  )}
                                  <span className="ml-3 block truncate">
                                    {selected
                                      ? selected.title
                                      : "Buscar integrantes..."}
                                  </span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                  <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
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
                                  {groupData.groups.map((team) => (
                                    <Listbox.Option
                                      key={team.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "bg-amber-400 text-white"
                                            : "text-gray-300",
                                          "relative cursor-default select-none py-2 pl-3 pr-9"
                                        )
                                      }
                                      value={team}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <div className="flex items-center">
                                            <img
                                              src={`https://www.gravatar.com/avatar/${md5(
                                                team.title
                                              )}?d=retro&f=y&s=128`}
                                              alt="person"
                                              className="h-5 w-5 flex-shrink-0 rounded-full"
                                            />
                                            <span
                                              className={classNames(
                                                selected
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "ml-3 block truncate"
                                              )}
                                            >
                                              {team.title}
                                            </span>
                                          </div>

                                          {selected ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? "text-white"
                                                  : "text-amber-400",
                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                              )}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                            <div className="text-red-400 text-xs mt-1">
                              {errorMessages.group}
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-zinc-500" />

              <div className="flex flex-wrap w-full justif-end mt-8">
                <button
                  className="bg-amber-400 text-amber-800 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Guardar
                </button>
                <Link
                  className="bg-white text-zinc-850 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  to="/groups/list"
                >
                  Cancelar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
