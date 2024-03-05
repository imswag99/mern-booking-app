import React, { useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState("");

  const {user} = useContext(UserContext);
  useEffect(() => {
    if(user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;

  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  async function bookThisPlace() {
    if(!user) {
      setRedirect("/login");
    }else {
      const response = await axios.post("/bookings", {
        place: place._id,
        checkIn,
        checkOut,
        numberOfGuests,
        name,
        phone,
        price: numberOfNights * place.price,
      });
  
      const bookingId = response.data._id;
      setRedirect(`/account/bookings/${bookingId}`);
    }
  }

  if(redirect){
    return <Navigate to={redirect} />
  }

  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <div className="text-lg font-bold text-center">
        Price: ${place.price} / night
      </div>
      <div className="border rounded-xl mt-4">
        <div className="flex">
          <div className="py-3 px-4 text-sm">
            <label>Check-in: </label>
            <input
              type="date"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div className="py-3 px-4 text-sm border-l">
            <label>Check-out: </label>
            <input
              type="date"
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
            />
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of guests: </label>
          <input
            type="number"
            value={
              numberOfGuests > place.maxGuests
                ? place.maxGuests
                : numberOfGuests
            }
            max={place.maxGuests}
            onChange={(ev) => setNumberOfGuests(ev.target.value)}
          />
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Your full name: </label>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <label>Phone: </label>
            <input
              type="tel"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
          </div>
        )}
      </div>
      <button onClick={bookThisPlace} className="primary mt-4">
        Book
        {numberOfNights > 0 && <span> ${numberOfNights * place.price}</span>}
      </button>
    </div>
  );
};

export default BookingWidget;
