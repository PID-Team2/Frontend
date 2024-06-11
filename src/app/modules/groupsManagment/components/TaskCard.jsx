import { useState, Fragment, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function TaskCard({ task, deleteTask, updateTask, project }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const username = "lola";
  const [selected, setSelected] = useState(null);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };
  useEffect(() => {
    if(selected)
    toggleEditMode();
  }, [selected])

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
      bg-zinc-400 p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-amber-400  cursor-grab relative
      "
      />
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-zinc-600  p-3  min-h-[100px] items-center flex flex-col text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-amber-400 cursor-grab relative"
      >
        <textarea
          className="
            h-[90%]
            w-full resize-none border-none rounded bg-transparent text-white focus:outline-none focus:border-transparent focus:ring-transparent
            "
          value={task.content}
          autoFocus
          placeholder="Task content here"
          // onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />

        <div className="w-full border-t-[1px] border-gray-400 mt-8 py-2 pt-4 flex justify-between">
          <div className="w-2/3">
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium leading-6 text-gray-300">
                    Asignar tarea
                  </Listbox.Label>
                  <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-zinc-600 py-1.5 pl-3 pr-10 text-left text-gray-100 shadow-sm ring-1 ring-inset ring-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        {selected && (
                          <img
                            src={`https://api.multiavatar.com/${selected.user.username}.png`}
                            alt="person"
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                        )}
                        <span className="ml-3 block truncate">
                          {selected
                            ? selected.user.username
                            : "Buscar intengrantes..."}
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
                        {project?.members.map((it) => (
                          <Listbox.Option
                            key={it.user.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-amber-400 text-white"
                                  : "text-gray-300",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={it}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <img
                                    src={`https://api.multiavatar.com/${it.user.username}.png`}
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
                                    {it.user.username}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-amber-400",
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
                </>
              )}
            </Listbox>
          </div>

          {selected?<img
            alt="user"
            src={selected ? `https://api.multiavatar.com/${selected.user.username}.png` : ""}
            className="h-8 w-8"
            aria-hidden="true"
          />:<span className="text-sm"> Sin asignar</span>}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      //   onClick={toggleEditMode}
      className="bg-zinc-600 text-white p-3  min-h-[100px] items-center flex flex-col text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-amber-400 cursor-grab relative task"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <p className="my-auto text-white h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {task.content}
      </p>

      <div className="w-full border-t-[1px] border-gray-400 mt-8 py-2 pt-4 flex justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => {
              toggleEditMode();
            }}
            className="stroke-white bg-zinc-850/30 p-2 rounded hover:bg-zinc-850/50"
          >
            <PencilIcon className="h-4 w-4 text-white hover:text-amber-400" />
          </button>

          <button
            onClick={() => {
              deleteTask(task.id);
            }}
            className="stroke-white  bg-zinc-850/30 hover:bg-zinc-850/50 p-2 rounded "
          >
            <TrashIcon className="h-4 w-4 text-white hover:text-amber-400" />
          </button>
        </div>
        {selected?<img
            alt="user"
            src={selected ? `https://api.multiavatar.com/${selected.user.username}.png` : ""}
            className="h-8 w-8"
            aria-hidden="true"
          />: "Sin asignar"}
      </div>
    </div>
  );
}

export default TaskCard;
