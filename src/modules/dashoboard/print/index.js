import React, { useState } from "react";
import "./scss/index.scss";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

import Check from "@mui/icons-material/Check";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#55C85A",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#55C85A",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#55C85A",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#55C85A",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const steps = ["order recieved", "In production", "In delivery", "Delivered"];
const initialData = [
  {
    id: 1,
    title: "GO LIGHTBOX 100200",
    quantity: "2x",
    articleNumber: "156002",
    dimesionNumber: "100cm x 200cm",
  },
  {
    id: 2,
    title: "POP LIGHTBOX",
    quantity: "3x",
    articleNumber: "156002",
    dimesionNumber: "100cm x 200cm",
  },
  {
    id: 3,
    title: "POP LIGHTBOX",
    quantity: "3x",
    articleNumber: "156002",
    dimesionNumber: "100cm x 200cm",
  },
  {
    id: 4,
    title: "POP LIGHTBOX",
    quantity: "3x",
    articleNumber: "156002",
    dimesionNumber: "100cm x 200cm",
  },
  {
    id: 5,
    title: "POP LIGHTBOX",
    quantity: "3x",
    articleNumber: "156002",
    dimesionNumber: "100cm x 200cm",
  },
  {
    id: 6,
    title: "POP LIGHTBOX",
    quantity: "2x",
    articleNumber: "156002",
    dimesionNumber: "100cm x 200cm",
  },
  {
    id: 7,
    title: "POP LIGHTBOX",
    quantity: "2x",
    articleNumber: "156002",
    dimesionNumber: "100cm x 200cm",
  },
  {
    id: 8,
    title: "POP LIGHTBOX",
    quantity: "3x",
    articleNumber: "156002",
    dimesionNumber: "100cm x 200cm",
  },
];
export const Print = () => {
  const [data, setData] = useState(initialData);

  return (
    <div className="hardware px-2 py-8">
      <h1>Print</h1>
      <div className="steppers">
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            activeStep={2}
            alternativeLabel
            connector={<QontoConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
        <div className="contents py-4">
          <div>
            <p>Estimated delivery date</p>
            <p>22.04.2022</p>
          </div>
          <div>
            <p>Shipment</p>
            <p>UPS</p>
          </div>
          <div>
            <p>Tracking number</p>
            <p className="trackNumber">D020f0d002</p>
          </div>
        </div>
      </div>
      {/* Nested cards */}
      {data.map((value) => {
        return (
          <div className="nested_card" key={value.id}>
            <div className="flex justify-between p-3 flex-wrap">
              <h1>{value.title}</h1>
              <h2>{value.quantity}</h2>
            </div>
            <p>Article number: {value.articleNumber}</p>
            <p>Dimensions: {value.dimesionNumber}</p>
          </div>
        );
      })}
    </div>
  );
};
