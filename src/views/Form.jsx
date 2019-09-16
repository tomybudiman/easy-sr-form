import React from "react";

import Slider from "@material-ui/core/Slider";
import {withStyles} from "@material-ui/core/styles";

import jsonData from "../questions.json";

const PrettoSlider = withStyles({
  root: {
    color: "#42a5f4",
    height: 8,
  },
  thumb: {
    width: 24,
    height: 24,
    marginTop: -8,
    marginLeft: -12,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  mark: {
    width: 8,
    height: 8,
    borderRadius: '50%'
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Form = () => {
  return(
    <div className="form-container">
      <span className="form-background"/>
      <div className="form-body">
        <header>Question Form</header>
        <div className="form">
          {Object.values(jsonData).map((each, i) => {
            return(
              <div className="each-item" key={i}>
                <p>{i + 1}. {each.question}</p>
                <div className="rate-slider">
                  <PrettoSlider valueLabelDisplay="auto" min={0} max={5} marks/>
                </div>
              </div>
            )
          })}
        </div>
        <footer></footer>
      </div>
    </div>
  )
};

export default Form