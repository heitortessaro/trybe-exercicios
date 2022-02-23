import React, { Component } from "react";
import FieldsetPersonalData from "./FieldsetPersonalData";

class Form extends Component{
  render() {
    const { handleChange, currentState } = this.props;
    // console.log(currentState)
    return(
      <FieldsetPersonalData 
        handleChange={handleChange}
        currentState={currentState}
      />
    );
  }
}

export default Form;