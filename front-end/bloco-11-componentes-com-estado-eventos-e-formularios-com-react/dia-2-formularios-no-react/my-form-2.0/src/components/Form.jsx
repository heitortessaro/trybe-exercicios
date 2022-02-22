import React, { Component } from "react";
import FieldsetPersonalData from "./FieldsetPersonalData";

class Form extends Component{
  render() {
    const { handleChange } = this.props;
    return(
      <FieldsetPersonalData handleChange={handleChange}/>
    );
  }
}

export default Form;