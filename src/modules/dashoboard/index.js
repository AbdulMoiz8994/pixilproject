import React, { useState } from "react";
import { Btn, Header } from "../../component/index";
import { Hardware } from "./hardware";
import { Print } from "./print";
import "./scss/index.scss";
import Checkbox from "@mui/material/Checkbox";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid rgb(245,247,248)",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
};

export const Dashboard = () => {
  const [checked, setChecked] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChangeTwo = (event) => {
    setCheckedTwo(event.target.checked);
  };
  const handleChangeThree = (event) => {
    setCheckedThree(event.target.checked);
  };
  const handleChangeFour = (event) => {
    setCheckedFour(event.target.checked);
  };
  return (
    <div className="h-screen overflow-auto">
      <Header />
      <div className="mx-auto w-4/5 mt-7 dashboard">
        <div className="ordernumber flex justify-end items-center">
          <span>Order</span>
          <h1>201020</h1>
        </div>
        {/* three cards */}
        <div className="Main_card">
          {/* card One Description */}
          <div className="bg-white   card-one">
            <div className="p-6">
              <h1>Delivery address</h1>
              <p>
                <span>Street</span> Augsburget StraBe 39
              </p>
              <p>
                {" "}
                <span>City</span> Unna
              </p>
              <p>
                {" "}
                <span>Phone</span> 02303367228
              </p>
              <p>
                {" "}
                <span>Zip code</span> 59423
              </p>
              <p>
                {" "}
                <span>Country</span> Germany
              </p>
            </div>
            <div className="pl-6 pt-5">
              <h1>Invoice address</h1>
              <p>
                <span>Street</span> Augsburget StraBe 39
              </p>
              <p>
                {" "}
                <span>City</span> Unna
              </p>
              <p>
                {" "}
                <span>Phone</span> 02303367228
              </p>
              <p>
                {" "}
                <span>Zip code</span> 59423
              </p>
              <p>
                {" "}
                <span>Country</span> Germany
              </p>
            </div>

            {/* versandart */}

            <div className="pl-6 pt-5">
              <h1>Versandat</h1>
              <h3 className="text-lg pl-1 pt-3">Hardware</h3>
              <div className="flex justify-start items-center -ml-2">
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p>Standered Shipping</p>
              </div>
              <div className="flex justify-start items-center -ml-2">
                <Checkbox
                  checked={checkedTwo}
                  onChange={handleChangeTwo}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <p>Express Shipping (+100$)</p>
              </div>
            </div>

            {/* print */}

            <div className="pl-6 pt-3">
              <h3 className="text-lg pl-1">Print</h3>
              <div className="flex justify-start items-center -ml-2">
                <Checkbox
                  checked={checkedThree}
                  onChange={handleChangeThree}
                  inputProps={{ "aria-label": "controlled" }}
                  color="success"
                />
                <p>Standered Shipping</p>
              </div>
              <div className="flex justify-start items-center -ml-2">
                <Checkbox
                  checked={checkedFour}
                  onChange={handleChangeFour}
                  inputProps={{ "aria-label": "controlled" }}
                  color="success"
                />
                <p>Express Shipping (+100$)</p>
              </div>
            </div>
            <div className="p-6">
              <Btn
                value="versandart andern"
                bgColor="rgb(0,113,227)"
                type="button"
                color="white"
                width="100%"
                padding="10px 0px"
                borderRadius="18px"
                onClick={handleOpen}
              />
            </div>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <div className="relative">
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                      className="text-center"
                    >
                      Change delivery method
                    </Typography>
                    <div className="absolute -top-5 -right-8 ">
                      <Button
                        onClick={handleClose}
                        className="font-extrabold text-5xl"
                      >
                        <CloseIcon sx={{ fontSize: 40, color: "black" }} />
                      </Button>
                    </div>
                  </div>
                  <div className="list_data  my-4">
                    <span className="flex justify-between">
                      <h2>Article</h2>
                      <h2>Price</h2>
                    </span>
                    <span className="flex justify-between">
                      <p>Express Shipping hardware</p>
                      <p>100$</p>
                    </span>
                    <span className="flex justify-between">
                      <p>Express Shipping prints</p>
                      <p>100$</p>
                    </span>
                    <span className="flex justify-between">
                      <h2>Total</h2>
                      <h2>200$</h2>
                    </span>
                  </div>
                  <div className="payment">
                    <Btn
                      value="PayPal"
                      width="100%"
                      bgColor="#FFC34C"
                      padding="10px 0px"
                      color="black"
                    />
                    <Btn
                      value="SEPA"
                      width="100%"
                      bgColor="#EEEDEE"
                      padding="10px 0px"
                      color="black"
                    />
                    <Btn
                      value="giroPay"
                      width="100%"
                      bgColor="#E1E1E2"
                      padding="10px 0px"
                      color="black"
                    />
                    <Btn
                      value="sofat"
                      width="100%"
                      bgColor="#E1E1E2"
                      padding="10px 0px"
                      color="black"
                    />
                    <Btn
                      value="Debit- oder Kreditkarte"
                      width="100%"
                      bgColor="#2D2E2F"
                      padding="10px 0px"
                      color="white"
                    />
                  </div>
                </Box>
              </Fade>
            </Modal>
          </div>

          <div className="bg-white card_two">
            <Hardware />
          </div>
          <div className="bg-white card_three">
            <Print />
          </div>
        </div>
      </div>
    </div>
  );
};
