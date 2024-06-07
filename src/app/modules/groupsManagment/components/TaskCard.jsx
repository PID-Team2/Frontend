import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";


function TaskCard({ task, deleteTask, updateTask }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

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
        className="bg-zinc-600 p-3 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-amber-400 cursor-grab relative"
      >
        <textarea
          className="
            h-[90%]
            w-full resize-none border-none rounded bg-transparent text-white focus:outline-none focus:border-transparent focus:ring-transparent
            "
            value={task.content}
            autoFocus
            placeholder="Task content here"
            onBlur={toggleEditMode}
            onKeyDown={(e) => {
            if (e.key === "Enter") {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
            />
           
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
      className="bg-zinc-600 text-white p-3 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-amber-400 cursor-grab relative task"
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

          {mouseIsOver && (
              <> <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="stroke-white absolute right-4  top-[80%] -translate-y-[80%] bg-zinc-850  p-2 rounded opacity-60 hover:opacity-100"
        >
          <TrashIcon className="h-4 w-4 text-white hover:text-amber-400"  />
              </button>
              
               <button
          onClick={() => {
            toggleEditMode()
          }}
          className="stroke-white absolute right-4  top-[20%] -translate-y-[20%] bg-zinc-850 p-2 rounded opacity-60 hover:opacity-100"
        >
          <PencilIcon className="h-4 w-4 text-white hover:text-amber-400"  />
                  </button>
              </>
       
              
          )}
    </div>
  );
}

export default TaskCard;