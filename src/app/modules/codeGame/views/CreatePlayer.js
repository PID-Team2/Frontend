import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPlayer, selectPlayerById, editPlayer } from "../playerSlice";
import { selectAuth } from "../../auth/authSlice";

export default function CreatePlayer() {

  const { playerId } = useParams();

  const playerToEdit = useSelector(state => selectPlayerById(state, playerId ?? -1))

  const navigate = useNavigate()

  const [player, setPlayer] = useState({
    name: playerToEdit ? playerToEdit.name : ''
  });

  const [errorMessages, setErrorMessages] = useState({
    name: ''
  });

  const authData = useSelector(selectAuth);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value
    })
    setErrorMessages({ name: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()

    if (isValid) {
      const data = {
        name: player.name,
        user: authData.user
      }
      if (playerToEdit) {
        const dataToEdit = {
          player: { ...data, id: playerToEdit.id },
          user: authData.user
        }
        dispatch(editPlayer(dataToEdit))

      }
      else
        dispatch(addNewPlayer(data))

      navigate('/games/')
    }
    return
  }

  const validate = () => {
    const { name } = player
    if (name.length < 3) {
      setErrorMessages({
        ...errorMessages,
        name: 'At least 3 characters'
      })
      return false
    }

    return true
  }

  return (
    <>
      <div className="overflow-y-auto flex justify-center items-center bg-zinc-850 text-white px-6 sm:pt-24 lg:px-24 h-screen">
        <div className="relative flex flex-col min-w-0 break-words w-3/6 mb-6 shadow-lg rounded-lg border-0">
          <div className="rounded-t bg-zinc-850 mb-0 px-6 py-6">
            <div className=" text-center">
              <h6 className="text-amber-400 text-xl font-bold center">{playerToEdit ? 'Edit player' : 'Create a Player'}</h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <hr className="mb-6 border-b-1 border-zinc-500" />
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-12/12 px-4 flex justify-center h-72">
                  <img src={player.name ? `https://robohash.org/${player.name}` : 'https://api.iconify.design/mdi:robot.svg?color=%23888888'} alt="avatar" />
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      value={player.name}
                      className="border-0 px-3 py-3 placeholder-gray-300 text-zinc-100 bg-zinc-700 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                      placeholder="Player name"
                    />
                    <div className="text-red-400 text-xs mt-1">{errorMessages.name}</div>
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-zinc-500" />

              <div className="flex flex-wrap w-full justify-center mt-8">
                <button
                  className="bg-amber-400 text-amber-800 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Save
                </button>
                <Link
                  className="bg-white text-zinc-850 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  to="/games"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
