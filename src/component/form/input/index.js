import React from "react";
import InputBase from "@mui/material/InputBase";
import PropsTypes from "prop-types";

export const Input = (props) => {
  return (
    <div>
      <InputBase
        sx={{ pl: 1, flex: 1 }}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        style={{
          border: props.border,
          backgroundColor: props.bgColor,
          borderRadius: props.borderRadius,
          width: props.width,
          padding: props.padding,
        }}
        required
      />
    </div>
  );
};

Input.propTypes = {
  type: PropsTypes.string,
  placeholder: PropsTypes.string,
  border: PropsTypes.string,
  borderRadius: PropsTypes.string,
  bgColor: PropsTypes.string,
  onChange: PropsTypes.func,
  value: PropsTypes.string,
  width: PropsTypes.string,
  padding: PropsTypes.string,
};
