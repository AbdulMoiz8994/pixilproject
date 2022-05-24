import React, { useState, useContext } from "react";
import { CreateContext } from "../../context/createContext";
import PixilLogo from "../../assests/images/pixlip_logo.svg";

export const Header = () => {
  const { value, onChangeFunc } = useContext(CreateContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [value, setValue] = useState("");
  const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(value);
  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center m-auto w-4/5 h-12">
        <div>
          <img src={PixilLogo} width="100px" height={"100px"} alt="pixilp" />
        </div>
        <div>
          <select
            id="basic-menu"
            open={open}
            onClose={handleClose}
            className="selection bg-white outline-none border-0 w-11"
            value={value}
            onChange={onChangeFunc}
          >
            <option onClick={handleClose} value="eng">
              EN
            </option>
            <option onClick={handleClose} value="de">
              DE
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
