import React, {useState} from "react";

import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import useStateWithCallback from "use-state-with-callback";

import jsonData from "../questions.json";

const Form = () => {
  const [isFormValid, setFormValidation] = useState(false);
  const [formData, updateFormData] = useStateWithCallback(jsonData.map(each => ({...each, value: null})), () => {
    setFormValidation(formData.filter(each => each.value !== null).length === formData.length);
  });
  const radioButtonHandler = (data, id) => {
    updateFormData(formData.map(each => {
      if(each.id === id){
        return {...each, value: data}
      }
      return each
    }));
  };
  return(
    <div className="form-container">
      <span className="form-background"/>
      <div className="form-body">
        <header>Question Form</header>
        <div className="form">
          {formData.map((each, i) => (
            <div className="each-item" key={i}>
              <p>{i + 1}. {each.question}</p>
              <RadioGroup className="radio-button-group" onChange={e => radioButtonHandler(e.target.value, each.id)}>
                <FormControlLabel value="1" control={<Radio color="primary"/>} label="1"/>
                <FormControlLabel value="2" control={<Radio color="primary"/>} label="2"/>
                <FormControlLabel value="3" control={<Radio color="primary"/>} label="3"/>
                <FormControlLabel value="4" control={<Radio color="primary"/>} label="4"/>
                <FormControlLabel value="5" control={<Radio color="primary"/>} label="5"/>
              </RadioGroup>
            </div>
          ))}
        </div>
        <footer>
          <Button variant="contained" color="primary" disabled={!isFormValid}>Submit</Button>
        </footer>
      </div>
    </div>
  )
};

export default Form