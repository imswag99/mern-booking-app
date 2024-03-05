import React from "react";
import { FaCarSide, FaWifi } from "react-icons/fa";
import { MdOutlinePets, MdAir } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { GiDoor } from "react-icons/gi";

const Perks = ({selected, onChange}) => {

  const handleCbClick = (ev) => {
    const { checked, name } = ev.target;
    if(checked) {
      onChange([...selected, name]);
    }else {
      onChange([...selected.filter(selectedName => selectedName !== name)]);
    }
  }

  return (
    <>
      <label className="border p-4 flex gap-2 items-center rounded-2xl">
        <input type="checkbox" checked={selected.includes('wifi')} name="wifi" onChange={handleCbClick} />
        <span className="flex gap-1 items-center">
          <FaWifi />
          Wifi
        </span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl">
        <input type="checkbox" checked={selected.includes('parking')} name="parking" onChange={handleCbClick} />
        <span className="flex gap-1 items-center">
          <FaCarSide />
          Free parking
        </span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl">
        <input type="checkbox" checked={selected.includes('ac')} name="ac" onChange={handleCbClick} />
        <span className="flex gap-1 items-center">
          <MdAir />
          Air conditioning
        </span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl">
        <input type="checkbox" checked={selected.includes('tv')} name="tv" onChange={handleCbClick} />
        <span className="flex gap-1 items-center">
          <PiTelevisionBold />
          TV
        </span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl">
        <input type="checkbox" checked={selected.includes('pets')} name="pets" onChange={handleCbClick} />
        <span className="flex gap-1 items-center">
          <MdOutlinePets />
          Pets
        </span>
      </label>
      <label className="border p-4 flex gap-2 items-center rounded-2xl">
        <input type="checkbox" checked={selected.includes('entrance')} name="entrance" onChange={handleCbClick} />
        <span className="flex gap-1 items-center">
          <GiDoor />
          Private entrance
        </span>
      </label>
    </>
  );
};

export default Perks;
