import React from "react";
import PropsTypes from "prop-types";
import Button from "@mui/material/Button";
import "./index.scss";

export const Btn = (props) => {
  return (
    <Button
      disabled={props.disabled}
      onClick={props.onClick}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        border: props.border,
        padding: props.padding,
        width: props.width,
        borderRadius: props.borderRadius,
      }}
      variant="contained"
      className="btn"
    >
      {props.value}
      {props.icon ? props.icon : ""}
    </Button>
  );
};
Btn.propTypes = {
  value: PropsTypes.string,
  icon: PropsTypes.any,
  bgColor: PropsTypes.string,
  onClick: PropsTypes.any,
  color: PropsTypes.string,
  border: PropsTypes.string,
  borderRadius: PropsTypes.string,
  padding: PropsTypes.string,
  width: PropsTypes.string,
  disabled: PropsTypes.any,
};
