import { UserPlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { selectgroupById } from "../groupsSlice";
import { Link, useParams } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { inviteUser } from "../groupsSlice";
import { selectAuth } from "../../auth/authSlice";
import { selectAllUsers, getUsers } from "../../auth/usersSlice";
import { selectProjectById, selectProjectsByGroupId } from "../projectSlice";
import KanbanBoard from "../components/KanbanBoard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Project() {
  const { projectId } = useParams();

  const dispatch = useDispatch();
  const authData = useSelector(selectAuth);

  const project = useSelector((state) => selectProjectById(state, projectId));

  const groupData = useSelector((state) =>
    selectgroupById(state, project.groupId ?? 0)
  );

  return (
    <>
      <div className="grid min-h-screen bg-zinc-850 px-6 py-4 lg:px-8 relative">
        <div className="bg-zinc-850 py-8 sm:py-32 px-4 md:px-5">
          <div className="text-start mb-8">
            <Link to={`/groups/edit-project/${project.id}`}>
              <h2 className="text-3xl font-bold text-white sm:text-4xl flex  gap-2 items-center hover:text-amber-300 hover:cursor-pointer">
                {project && project.title}
                <PencilIcon className="ml-2 h-7" />
              </h2>
            </Link>
          </div>

          <div className="mx-auto">
            <p className="mt-6  text-lg leading-8 text-gray-300">
              Description: {project ? project.description : "404"}
            </p>
            <div className=" text-md mb-6 text-amber-400 mt-2">
              Team: {groupData && groupData.title}
            </div>
            {/* /groups/project/kanban/ */}
            <div className="text-white flex text-md mb-6">
              <Link
                className=" flex max-w-xs justify-center rounded-md bg-amber-400 px-8 py-2 text-sm font-semibold text-white hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                to={`/groups/project/kanban/${project.id}`}
              >
                Go to kanban
              </Link>
            </div>
            <ul role="list" className="flex flex-wrap gap-5">
              {groupData &&
                project.members.map((person) => (
                  <li key={person.user.id}>
                    <div className="flex items-center gap-x-2">
                      <div className="max-h-10 max-w-10 rounded-full bg-zinc-700">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={`https://api.multiavatar.com/${person.user.username}.png`}
                          alt={person.user.username}
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-300">
                          {person.user.username}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-amber-400 flex items-center">
                          Set Role <PencilIcon className="ml-2 h-3" />
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
