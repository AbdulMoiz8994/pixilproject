import React, { useState, useContext, useRef } from "react";
import "./scss/index.scss";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
import { CreateContext } from "../../../context/createContext";
import StepLabel from "@mui/material/StepLabel";
// import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";

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
];

export const Hardware = () => {
  const { value } = useContext(CreateContext);
  console.log(value);

  const [data, setData] = useState(initialData);
  const [check, setCheck] = useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const refDat = useRef(null);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps();
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = (step) => (e) => {
    // console.log(e.target.innerHTML);
    if (e.target.innerHTML == 4 && activeStep >= 3) {
      setActiveStep(step++);
    }
    setActiveStep(step);
  };

  return (
    <div className="hardware px-2 py-8">
      <h1>Hardware</h1>
      <div className="steppers">
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            connector={<QontoConnector />}
            activeStep={activeStep}
          >
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepLabel onClick={handleStep(index)}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>

        <div className="contents accordin-css">
          <div>
            <p>Estimated delivery date</p>
            <p>{value == "de" ? "22.05.2022" : "22.05.2023"}</p>
          </div>
          <div>
            <p>Shipment</p>
            <p>{value == "de" ? "ups" : "UPS"}</p>
          </div>
          <div>
            <p>Tracking number</p>
            <p className="trackNumber">
              {value == "de" ? "D020f02344" : "D020f0d002"}
            </p>
          </div>
        </div>
      </div>
      {data.map((value) => {
        return (
          <div className="nested_card" key={value.id}>
            <div className="flex justify-between p-2 px-5 flex-wrap">
              <h1>{value.title}</h1>
              <h2>{value.quantity}</h2>
            </div>
            <div className="px-2">
              <p>Article number: {value.articleNumber}</p>
              <p>Dimensions: {value.dimesionNumber}</p>
            </div>
          </div>
        );
      })}

      {/* <Accordion className="accordins">
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ outline: "1px solid white" }}
          expandIcon={<ExpandMoreIcon />}
        >
          <button className="arrowButton text-center w-full">
          </button>
        </AccordionSummary>
        <AccordionDetails>
          {data.map((value) => {
            return (
              <div className="accor_drop" key={value.id}>
                <div className="flex justify-between p-3 flex-wrap">
                  <h1>{value.title}</h1>
                  <h2>{value.quantity}</h2>
                </div>
                <p>Article number: {value.articleNumber}</p>
                <p>Dimensions: {value.dimesionNumber}</p>
              </div>
            );
          })}
        </AccordionDetails>
      </Accordion> */}

      <Accordion className="accordins">
        <AccordionDetails>
          {data.map((value) => {
            return (
              <div
                className={`${check == false ? "accor_drop" : "acc-active"}`}
                key={value.id}
              >
                <div className={`flex justify-between p-3 flex-wrap`}>
                  <h1>{value.title}</h1>
                  <h2>{value.quantity}</h2>
                </div>
                <p>Article number: {value.articleNumber}</p>
                <p>Dimensions: {value.dimesionNumber}</p>
              </div>
            );
          })}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={() => setCheck(!check)}
            style={{ outline: "1px solid white" }}
            className="buttondrop"
          >
            <button
              className="arrowButton text-center w-full"
              onClick={() => setCheck(!check)}
            ></button>
          </AccordionSummary>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
