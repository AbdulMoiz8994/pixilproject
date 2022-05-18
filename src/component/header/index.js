import React from "react";
import PixilLogo from "../../assests/images/pixlip_logo.svg";

export const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center m-auto w-4/5 h-12">
        <div>
          <img src={PixilLogo} width="100px" height={"100px"} alt="pixilp" />
        </div>
        <div>DE</div>
      </div>
    </div>
  );
};
