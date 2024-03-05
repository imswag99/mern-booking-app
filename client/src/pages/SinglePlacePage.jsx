import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

const SinglePlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  return (
    <div className="mt-4 bg-gray-200 -mx-8 p-8 pb-0">
      <h1 className="text-3xl">{place.title}</h1>
      <AddressLink>{place.address}</AddressLink>
      <PlaceGallery place={place} />
      <div className="my-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="mb-4 text-justify">
            <h2 className="font-semibold text-2xl mb-1">Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn}
          <br />
          Check-out: {place.checkOut}
          <br />
          Max number of guests: {place.maxGuests}
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white -mx-8 p-8 pb-2 border-t">
        <div>
          <h2 className="font-semibold text-xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-justify text-sm text-gray-700 leading-5">
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
};

export default SinglePlacePage;
