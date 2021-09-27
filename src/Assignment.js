import React, { useState } from "react";
import validator from "validator";
import "./Assigment.css";
function Assignment() {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Please add valid email address");
    }
  };
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      })
    ) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please add strong password");
    }
  };

  return (
    <>
      <div className="top">
        <div className="Ellipse"></div>
        <div className="mainRect">
          <div className="mainImg">
            <div className="imagecontent">
              <p className="sampleheading">Sample heading</p>
              <p className="paratext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                distinctio incidunt quae voluptas tempore dolorem, autem officia
                libero soluta.
              </p>
            </div>
          </div>

          <div className="form1">
            <div className="formContent">
              <form id="form1">
                <div className="createAnAccount">
                  <label>Create an account</label>
                </div>
                <div className="enteremail">
                  <label className="textformat ">Enter your email</label>
                  <br />
                  <input
                    type="text"
                    className="inputbox"
                    id="userEmail"
                    onChange={(e) => validateEmail(e)}
                  />

                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#FFFFFF",
                      background: "#EB5757",
                      borderRadius: "3px",
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "500",
                      width: "132px",
                      height: "30px"
                    }}
                  >
                    {emailError}
                  </span>
                </div>
                <br />
                <div className="enterdate">
                  <label className="textformat">Date of Birth(Optional)</label>
                  <br />
                  <div style={{ float: "left", padding: "10px 0px 0px 0px" }}>
                    <label className="labelDate">Date</label>
                    <br />
                    <input type="text" className="dateformat" />
                  </div>
                  <div style={{ float: "left", padding: "10px" }}>
                    <label className="labelDate">Month</label>
                    <br />
                    <select name="month" id="month" className="monthformat">
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>
                  <div>
                    <label className="labelDate">Year</label>
                    <br />
                    <select name="year" id="year" className="yearformat">
                      <option value="January">2021</option>
                      <option value="February">2020</option>
                      <option value="March">2019</option>
                      <option value="April">2018</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="enterpassword">
                  <label className="textformat">Choose a Strong Password</label>
                  <br />
                  <input
                    type="password"
                    id="pwd"
                    name="pwd"
                    className="inputbox"
                    onChange={(e) => validate(e.target.value)}
                  />
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#FFFFFF",
                      background: "#EB5757",
                      borderRadius: "3px",
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "500",
                      width: "132px",
                      height: "30px"
                    }}
                  >
                    {errorMessage}
                  </span>
                  <br />
                </div>

                <div className="enteragency">
                  <label className="textformat">Are you a Design Agency</label>
                  <br />
                  <input
                    type="radio"
                    id="individual"
                    name="agency_name"
                    value="individual"
                  />
                  <label for="individual" className="radiooption">
                    Individual
                  </label>
                  <input
                    type="radio"
                    id="agency"
                    name="agency_name"
                    value="agency"
                  />
                  <label for="agency" className="radiooption">
                    Agency
                  </label>
                </div>
              </form>

              <button
                type="submit"
                form="form1"
                value="Submit"
                className="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default Assignment;
