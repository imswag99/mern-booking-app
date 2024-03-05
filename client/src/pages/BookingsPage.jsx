import React, { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import { CiMoneyBill } from "react-icons/ci";
import PlaceImg from "../PlaceImg";
import { Link } from "react-router-dom";
import BookingDates from "../BookingDates";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <Link
              to={`/account/bookings/${booking._id}`}
              className="flex gap-4 bg-gray-100 rounded-2xl overflow-hidden"
            >
              <div className="w-48">
                <PlaceImg place={booking.place} />
              </div>
              <div className="py-3 pr-3 grow">
                <h2 className="text-lg">{booking.place.title}</h2>
                <div className="font-semibold">
                  <BookingDates
                    booking={booking}
                    className={"mb-2 mt-4 text-gray-500"}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <CiMoneyBill className="w-8 h-8" />
                  <span className="text-lg font-semibold">
                    Total price: ${booking.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BookingsPage;
