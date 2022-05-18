import React, { useState } from "react";
import "./scss/index.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

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
// export default function HorizontalStepperWithError() {

// }
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
];

export const Hardware = () => {
  const [data, setData] = useState(initialData);
  const isStepFailed = (step) => {
    return step === 1;
  };
  return (
    <div className="hardware px-2 py-8">
      <h1>Hardware</h1>
      <div className="steppers">
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            activeStep={1}
            alternativeLabel
            connector={<QontoConnector />}
          >
            {/* {steps.map((label) => ( */}
            {steps.map((label, index) => {
              const labelProps = {};
              if (isStepFailed(index)) {
                labelProps.optional = (
                  <Typography style={{display: 'flex', justifyContent: 'center'}} variant="caption" color="error">
                    Failed
                  </Typography>
                );

                labelProps.error = true;
              }
              return (
                <Step key={label}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Stack>
        <div className="contents">
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
      {data.map((value) => {
        return (
          <div className="nested_card" key={value.id}>
            <div className="flex justify-between p-2 flex-wrap">
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
