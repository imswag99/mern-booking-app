import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const AddressLink = ({children, className=null}) => {

  if(!className) {
    className = "my-3 block"
  }

  className += " flex items-center gap-1 mt-2 font-semibold underline"

  return (
    <a
      className={className}
      target="_blank"
      href={"https://maps.google.com/?q=" + children}
    >
      <IoLocationOutline />
      {children}
    </a>
  );
};

export default AddressLink;
