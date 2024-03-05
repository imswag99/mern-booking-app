import axios from "axios";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaTrashAlt, FaRegStar, FaStar } from "react-icons/fa";

const PhotosUploader = ({addedPhotos, onChange}) => {

  const [photoLink, setPhotoLink] = useState("");

  async function addPhotoByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    onChange((prev) => {
      return [...prev, filename];
    });

    setPhotoLink("");
  }

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    axios
      .post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  function removePhoto(ev, filename) {
    ev.preventDefault();
    onChange([...addedPhotos.filter(photo => photo !== filename)]);
  }

  function selectCoverPhoto(ev, filename ) {
    ev.preventDefault();
    onChange([filename, ...addedPhotos.filter(photo => photo !== filename)]);
  }

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder={"Add using a link ...jpg"}
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <button
          onClick={addPhotoByLink}
          className="bg-gray-200 px-4 rounded-2xl"
        >
          Add&nbsp;photo
        </button>
      </div>
      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div className="h-32 flex relative" key={link}>
              <img
                className="rounded-2xl w-full object-cover"
                src={"http://localhost:4000/uploads/" + link}
                alt=""
              />
              <button onClick={(ev) => removePhoto(ev, link)} className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 p-2 rounded-2xl">
                <FaTrashAlt />
              </button>
              <button onClick={(ev) => selectCoverPhoto(ev, link)} className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 p-2 rounded-2xl">
                {link === addedPhotos[0] && (
                  <FaStar />
                )}
                {link !== addedPhotos[0] && (
                  <FaRegStar />
                )}
              </button>
            </div>
          ))}
        <label className=" h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-xl font-bold">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          <AiOutlineCloudUpload className="w-8 h-8" />
          Upload
        </label>
      </div>
    </>
  );
};

export default PhotosUploader;
