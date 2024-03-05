import React, { useContext } from 'react'
import { FaAirbnb, FaSearch, FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { UserContext } from './UserContext';

const Header = () => {
  const {user} = useContext(UserContext);

  return (
    <header className="flex justify-between">
        <Link to={"/"} className="flex items-center gap-1 text-primary">
          <FaAirbnb className="text-4xl" />
          <span className="font-Logo font-bold text-xl text-primary">airbnb</span>
        </Link>

        <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
          <div>Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div>Any week</div>
          <div className="border-l border-gray-300"></div>
          <div>Add guests</div>
          <button className="bg-primary text-white p-2 rounded-full">
            <FaSearch className="w-3 h-3" />
          </button>
        </div>

        <Link to={user? "/account" : "/login"} className="flex gap-2 border border-gray-300 rounded-full py-2 px-3 items-center">
          <MdMenu className="w-5 h-5" />
          <FaUserCircle className="w-7 h-7 text-gray-500" />
          {!!user && (
            <div>{user.name}</div>
          )}
        </Link>
      </header>
  )
}

export default Header