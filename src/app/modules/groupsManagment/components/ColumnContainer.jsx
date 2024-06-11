import { SortableContext, useSortable } from "@dnd-kit/sortable";
import TrashIcon from "../icons/TrashIcon";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import TaskCard from "./TaskCard";

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
  project
}) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
            bg-zinc-800
            opacity-40
            border-0
            border-primary
            text-white
            w-[350px]
            h-[500px]
            max-h-[500px]
            rounded-md
            flex
            flex-col
            "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
            bg-zink-800
            w-[350px]
            h-[500px]
            max-h-[500px]
            rounded-md
            flex
            flex-col
  "
    >
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className="
                bg-zinc-700
                text-md
                h-[60px]
                cursor-grab
                rounded-md
                rounded-b-none
                p-3
                font-bold
                border-zinc-700
                border-0
                flex
                items-center
                justify-between
                text-white
      "
      >
        <div className="flex gap-2">
          <div
            className="
            flex
            justify-center
            items-center
            bg-zinc-500
            px-2
            py-1
            text-sm
            rounded-full
            "
          >
            0
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-black text-white focus:border-primary border rounded outline-none px-2"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="
                stroke-gray-500
                hover:stroke-white
                hover:bg-columnBackgroundColor
                rounded
                px-1
                py-2
                "
        >
          <TrashIcon />
        </button>
      </div>

      {/* Column task container */}
      <div className="flex text-white flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
              project= {project}
            />
          ))}
        </SortableContext>
      </div>
      {/* Column footer */}
      <button
        className="flex gap-2 text-white items-center border-zinc-700 border-2 rounded-md p-4 border-x-zinc-700 hover:bg-mainBackgroundColor hover:text-amber-400 active:bg-black"
        onClick={() => {
          createTask(column.id);
        }}
      >
        <PlusIcon />
        Agregar tarea
      </button>
    </div>
  );
}

export default ColumnContainer;
