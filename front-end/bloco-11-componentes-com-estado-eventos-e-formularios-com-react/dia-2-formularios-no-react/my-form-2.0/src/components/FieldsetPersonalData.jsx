import React, { Component } from "react";
import stateData from "./stateData"

class FieldsetPersonalData extends Component{
  render () {
    const { handleChange } = this.props;
    return (
      <fieldset>
        <legend>Personal Data</legend>
        <div className="input-form">
          {/* Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.  */}
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name='name' 
            maxLength={40} 
            required 
            onChange={handleChange}
          />
        </div>
        <div className="input-form">
          <label htmlFor="email">Email</label>
          <input 
            type='email' 
            name='email' 
            maxLength={50} 
            required 
            onChange={handleChange}
          />
        </div>
        <div className="input-form">
          <label htmlFor="cpf">CPF</label>
          <input 
            type='text'
            name='cpf' 
            maxLength={11} 
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-form">
          {/* Remover qualquer caracter especial que seja digitado  */}
          <label htmlFor="adress">Adress</label>
          <input 
            type="text" 
            name='adress' 
            maxLength={200} 
            required 
            onChange={handleChange}
          />
        </div>
        <div className="input-form">
          {/* Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.  */}
          <label htmlFor="city">City</label>
          <input 
            type="text" 
            name='city' 
            maxLength={28} 
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-form">
          <label htmlFor="state">State</label>
          <select 
            type="select" 
            name='state' 
            required
            onChange={handleChange}>
               <option disabled selected value> Select your state </option>
              {stateData.map((state) => <option key={state.value} value={state.value}>{state.label}</option>)}
          </select>
        </div>
        <div className="input-form">
          <input type="radio" id="apartament" name="houseType" value="house"/>
          <label htmlFor="apartament">House</label>
          <br />
          <input type="radio" id="house" name="houseType" value="apartament"/>
          <label htmlFor="house">Apartament</label> 
        </div>
      </fieldset>
    );
  }
}

export default FieldsetPersonalData;
