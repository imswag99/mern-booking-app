import React, { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";

const PlaceGallery = ({place}) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-white min-h-screen">
        <div className="px-8 py-16 grid gap-4">
          <div>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed left-12 top-8 px-2 py-1 shadow-black-500 bg-white rounded-lg text-3xl text-black"
            >
              <IoMdArrowRoundBack />
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <img src={`http://localhost:4000/uploads/${photo}`} alt="" />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mt-8">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-xl overflow-hidden">
        <div>
          {place.photos?.[0] && (
            <div>
              <img
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square object-cover cursor-pointer"
                src={"http://localhost:4000/uploads/" + place.photos[0]}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="grid">
          {place.photos?.[1] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="aspect-square object-cover cursor-pointer"
              src={"http://localhost:4000/uploads/" + place.photos[1]}
              alt=""
            />
          )}
          {place.photos?.[2] && (
            <div className="overflow-hidden">
              <img
                onClick={() => setShowAllPhotos(true)}
                className="aspect-square object-cover relative top-2 cursor-pointer"
                src={"http://localhost:4000/uploads/" + place.photos[2]}
                alt=""
              />
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setShowAllPhotos(true)}
        className="absolute bottom-2 right-2 py-2 px-4 text-sm font-semibold bg-white rounded-2xl shadow-md shadow-gray-500 flex items-center gap-1"
      >
        <TbGridDots />
        Show more photos
      </button>
    </div>
  );
};

export default PlaceGallery;
