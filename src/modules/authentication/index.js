import React, { useState } from "react";
import { Btn, Input, Header } from "../../component/index";
import { useNavigate } from "react-router-dom";
import "./scss/index.scss";

export const Authentication = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState();
  const [emails, setEmails] = useState("");

  const handleClick = () => {
    // console.log(id);
    navigate(`/pixil/${values}`);
  };
  return (
    <div>
      <Header />
      <div className="mt-20">
        <div className="auth flex flex-col justify-center items-center xs:overflow-hidden w-full">
          <div className="card p-6 rounded-lg">
            <h1>Find your Order</h1>
            <p className="text-sm text-center my-2">
              Track your order and deliverystatus of your order
            </p>
            <div className="w-full py-3 my-2">
              <div className="input-email rounded">
                <Input
                  placeholder="ordernumber"
                  type="number"
                  name="ordernumber"
                  bgColor="#F5F7F8"
                  width="100%"
                  padding="8px 12px"
                  borderRadius="18px"
                  value={values}
                  onChange={(e) => setValues(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full py-2 my-2">
              <div className="input-password rounded">
                <Input
                  placeholder="email"
                  type="email"
                  name="email"
                  bgColor="#F5F7F8"
                  width="100%"
                  padding="8px 12px"
                  borderRadius="18px"
                  value={emails}
                  onChange={(e) => setEmails(e.target.value)}
                />
              </div>
            </div>
            <div className="btn-sign w-full py-3 my-2">
              <div className=" rounded text-center">
                <Btn
                  value="search order"
                  bgColor="#0071E3"
                  type="button"
                  color="white"
                  width="100%"
                  padding="10px 0px"
                  borderRadius="18px"
                  onClick={handleClick}
                  disabled={values === 0 || emails == ""}
                />
              </div>
            </div>
            <div className="w-full py-2 my-2">
              <a
                href="#/"
                className="text-sm text-center flex justify-center"
                style={{ color: "#0071E3" }}
              >
                How to find your ordernumber
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
