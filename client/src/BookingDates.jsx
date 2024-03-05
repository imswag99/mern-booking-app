import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import { differenceInCalendarDays, format } from "date-fns";

const BookingDates = ({ booking, className }) => {
  return (
    <div className={"flex items-center gap-2 " + className}>
      <IoMoonOutline />
      {differenceInCalendarDays(
        new Date(booking.checkOut),
        new Date(booking.checkIn)
      )}{" "}
      nights:
      <div className="flex items-center gap-1">
        <AiOutlineCalendar />
        {format(new Date(booking.checkIn), "dd-MM-yyyy")}
      </div>
      <FaArrowRightLong />
      <div className="flex items-center gap-1">
        <AiOutlineCalendar />
        {format(new Date(booking.checkOut), "dd-MM-yyyy")}
      </div>
    </div>
  );
};

export default BookingDates;
