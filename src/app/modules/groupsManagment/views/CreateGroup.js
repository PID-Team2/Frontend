import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewGroup, selectgroupById, editGroup } from "../groupsSlice";
import { selectAuth } from "../../auth/authSlice";

export default function CreateGroup() {
  const { groupId } = useParams();

  const groupToEdit = useSelector(state => selectgroupById(state, groupId ?? -1))

  const navigate = useNavigate()

  const [team, setTeam] = useState({
    title: groupToEdit ? groupToEdit.title : '',
    description: groupToEdit ? groupToEdit.description : '',
  });

  const [errorMessages, setErrorMessages] = useState({
    title: ''
  });


  const authData = useSelector(selectAuth);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTeam({
      ...team,
      [e.target.name]: e.target.value
    })
    setErrorMessages({ title: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()

    if (isValid) {
      const data = {
        group: team,
        user: authData.user
      }
      if (groupToEdit) {
        const dataToEdit = {
          group: { ...data.group, id: groupToEdit.id },
          user: authData.user
        }
        dispatch(editGroup(dataToEdit))

      }
      else
        dispatch(addNewGroup(data))

      navigate('/groups/list')
    }
    return
  }

  const validate = () => {
    const { title } = team
    if (title.length < 3) {
      setErrorMessages({
        ...errorMessages,
        title: 'At least 3 characters'
      })
      return false
    }

    return true
  }

  return (
    <>
      <div className="overflow-y-auto flex flex-center bg-zinc-850 text-white px-6 sm:pt-24 lg:px-24">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
          <div className="rounded-t bg-zinc-850 mb-0 px-6 py-6">
            <div className=" text-center flex justify-between">
              <h6 className="text-white text-xl font-bold">Crear grupo</h6>
            </div>
          </div>
          <hr className="mb-6 border-b-1 border-zinc-500" />
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Información del Grupo
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-zinc-200 text-xs font-bold mb-2"
                      htmlFor="title"
                    >
                      Name
                    </label>
                    <input
                      onChange={handleChange}
                      value={team.title}
                      type="text"
                      name="title"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-zinc-100 bg-zinc-700 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                      placeholder="Nombre del Grupo"
                    />
                    <div className="text-red-400 text-xs mt-1">{errorMessages.title}</div>
                  </div>
                </div>

                <div className="flex flex-wrap w-full">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="description"
                      >
                        Descripción del grupo
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={team.description}
                        className="border-0 placeholder-gray-300 text-zinc-100 bg-zinc-700 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                        rows="4"
                        placeholder="Describe tu grupo"
                      ></textarea>
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
  )
}
