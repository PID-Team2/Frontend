import KanbanBoard from "../components/KanbanBoard";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectAuth } from "../../auth/authSlice";
import { selectAllUsers, getUsers } from "../../auth/usersSlice";
import { selectProjectById } from "../projectSlice";

export default function KanbanPage() {
  const { projectId } = useParams();
  const project = useSelector((state) => selectProjectById(state, projectId));

  return (
    <>
      <div className="grid min-h-screen bg-zinc-850 px-6 py-4 lg:px-8 relative overflow-auto">
        <div className="mt-20 flex justify-center text-white text-xl">
          Project {project && project.title}{" "}
        </div>
        <KanbanBoard />
      </div>
    </>
  );
}
