import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegUser, FaListUl } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const AccountNav = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split('/')?.[2];
  if(subpage === undefined){
    subpage = 'profile';
  }

  const linkClasses = (type = null) => {
    let classes = "inline-flex gap-1 items-center py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    }else{
      classes += " bg-gray-200 rounded-full";
    }
    return classes;
  };

  return (
    <nav className="w-full flex justify-center gap-2 mt-8 mb-8">
      <Link className={linkClasses("profile")} to={"/account"}>
        <FaRegUser />
        My profile
      </Link>
      <Link className={linkClasses("bookings")} to={"/account/bookings"}>
        <FaListUl />
        My bookings
      </Link>
      <Link className={linkClasses("places")} to={"/account/places"}>
        <HiOutlineBuildingOffice2 />
        My accommodations
      </Link>
    </nav>
  );
};

export default AccountNav;
