import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateGroup() {
  const navigate = useNavigate()
  const [team, setTeam] = useState({
    name: '',
    email: '',
    description: '',
    members: []
  });

  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
  });

  const users = [
    { name: "Lola Doe" },
    { name: "Jhon Rodriguez" },
    { name: "Janet Sample" },
  ]

  const handleChange = (e) => {
    console.log(e.target.name)
    setTeam({
        ...team,
        [e.target.name]: e.target.value
    })
    setErrorMessages({ name: '', email: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(team)
    const isValid = validate()
        
    if(isValid) navigate('/groups/list')
    return
  }

  const validate = () =>{
    const {email, name, } = team
    if(name.length<3){
      setErrorMessages({
      ...errorMessages,
        name: 'At least 3 characters'
      })
      return false
    }
    if (email && !/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/.test(email)) {
        setErrorMessages({
            ...errorMessages,
            email: 'Enter a valid email'
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
              <h6 className="text-white text-xl font-bold">Create a Team</h6>
            </div>
          </div>
          <hr className="mb-6 border-b-1 border-zinc-500" />
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Team Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-zinc-200 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-zinc-100 bg-zinc-700 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                      placeholder="Team name"
                    />
                    <div className="text-red-400 text-xs mt-1">{errorMessages.name}</div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="border-0 border-0 px-3 py-3 placeholder-gray-300 text-zinc-100 bg-zinc-700 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                      placeholder="jesse@example.com"
                    />
                    <div className="text-red-400 text-xs mt-1">{errorMessages.email}</div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Description
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        onChange={handleChange}
                        className="border-0 placeholder-gray-300 text-zinc-100 bg-zinc-700 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                        rows="4"
                        placeholder="Describe your team..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-zinc-500" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Members
              </h6>
              <div className="flex flex-wrap ml-3">
                <div className="relative w-full lg:w-7/12 mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Search users
                  </label>
                  <input
                    type="text"
                    className="border-0 placeholder-gray-300 text-zinc-100 bg-zinc-700 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                    placeholder="Search..."
                  />
                </div>
                <div className="w-full lg:w-5/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      className="border-0 placeholder-gray-300 text-zinc-100 bg-zinc-700 rounded text-sm shadow focus:outline-none focus:ring focus-within:ring-amber-400 w-full ease-linear transition-all duration-150"
                      placeholder="Asign a role"
                    />
                  </div>
                </div>

              </div>
              <div className="flex flex-wrap w-full justif-end mt-8">
                <button
                  className="bg-amber-400 text-amber-800 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Save
                </button>
                <Link
                  className="bg-white text-zinc-850 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  to="/groups/list"
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
