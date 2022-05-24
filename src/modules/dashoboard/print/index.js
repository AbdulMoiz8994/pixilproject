import React, { useEffect, useRef, useState } from "react";
import "./scss/index.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const steps = [
  "order recieved",
  "Printdata Recieved",
  "In production",
  "In delivery",
  "Delivered",
];
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

// on Error Data Show
const DataError = [
  {
    msg: "Print-data not received",
    link: "Upload now",
    description:
      "If you have already sent your print Data you do not need to do anything. It can take up to 48 hours until they are processed",
    develiverTime: "",
    snipmentprovider: "",
    TrackingNumber: "",
  },
];
const WarningData = [
  {
    msg: "Printing data need correction",
    link: "Upload now",
    description:
      "If you have already sent your print Data you do not need to do anything. It can take up to 48 hours until they are processed",
    develiverTime: "",
    snipmentprovider: "",
    TrackingNumber: "",
  },
];

export const Print = () => {
  const [data, setData] = useState(initialData);
  const [showError, setShowError] = useState("success");
  const [showWarning, setShowWarning] = useState(WarningData);
  const [dataerror, setDataError] = useState(DataError);
  const [check, setCheck] = useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

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
    if (e.target.innerHTML == 5 && activeStep >= 4) {
      setActiveStep(step++);
    }
    setActiveStep(step);
  };

  const finalResult = () => {
    if (showError === "failed") {
      setShowError("failed");
    } else if (showError === "warning") {
      setShowError("warning");
    } else {
      setShowError("success");
    }
  };
  const isStepFailed = (step) => {
    // console.log(step);
    if (showError === "success") {
      return step === 9;
    }
    return step === 1;
  };
  useEffect(() => {
    finalResult();
  }, []);
  return (
    <div className="hardware px-2 py-8">
      <h1>Print</h1>
      <div
        className={
          showError == "warning"
            ? "steppers warningClass"
            : showError == "failed"
            ? "steppers failedClass"
            : "steppers"
        }
      >
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            connector={<QontoConnector />}
            activeStep={showError === "success" ? activeStep : 1}
          >
            {steps.map((label, index) => {
              const labelProps = {};
              if (isStepFailed(index)) {
                labelProps.error = true;
              }
              return (
                <Step key={label} completed={completed[index]}>
                  <StepLabel {...labelProps} onClick={handleStep(index)}>
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Stack>

        {showError === "failed" ? (
          dataerror.map((value, ind) => {
            return (
              <div key={ind} className="contents py-4 accordin-css">
                <div className="text-red-600 cursor-pointer">
                  {value.msg && value.msg}
                </div>
                <div className="trackNumber capitalize">
                  {value.link && value.link}
                </div>
                <div className="description">
                  {value.description && value.description}
                </div>
                <div>
                  <p>Estimated delivery date</p>
                  <p>{value.develiverTime && value.develiverTime}</p>
                </div>
                <div>
                  <p>Shipment</p>
                  <p>{value.snipmentprovider && value.snipmentprovider}</p>
                </div>
                <div>
                  <p>Tracking number</p>
                  <p className="trackNumber">
                    {value.TrackingNumber && value.TrackingNumber}
                  </p>
                </div>
              </div>
            );
          })
        ) : showError === "warning" ? (
          showWarning.map((value, ind) => {
            return (
              <div key={ind} className="contents py-4 accordin-css">
                <div className=" warn-msg cursor-pointer">
                  {value.msg && value.msg}
                </div>
                <div className="trackNumber capitalize">
                  {value.link && value.link}
                </div>
                <div className="description">
                  {value.description && value.description}
                </div>
                <div>
                  <p>Estimated delivery date</p>
                  <p>{value.develiverTime && value.develiverTime}</p>
                </div>
                <div>
                  <p>Shipment</p>
                  <p>{value.snipmentprovider && value.snipmentprovider}</p>
                </div>
                <div>
                  <p>Tracking number</p>
                  <p className="trackNumber">
                    {value.TrackingNumber && value.TrackingNumber}
                  </p>
                </div>
              </div>
            );
          })
        ) : showError === "success" ? (
          <div className="contents py-4 accordin-css">
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
        ) : (
          ""
        )}
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
