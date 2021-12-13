import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        inputNumber: "",
        primeNumbers: [],
        
    };
    this.handleNameChange = this.handleNameChange.bind(this);        
    this.afterSubmission = this.afterSubmission.bind(this);
}

handleNameChange(event) {        
    this.setState({
      inputNumber: event.target.value
    });
}

afterSubmission(event) {
  const {primeNumbers} = this.state.primeNumbers;
  let num = this.state.inputNumber;
  
  event.preventDefault();
fetch('/getprime/' + num)
.then(response => response.json())
.then(data => this.setState({primeNumbers: data}));
 
}

render() {
  
  return(
      <div>
          <form onSubmit = {this.afterSubmission}>
              <label> Enter Your Maxumum Integer Here: 
              <input 
                  type = 'number'
                  min = '0'
                  name = "inputValue" 
                  value = {this.state.inputNumber} 
                  onChange = {this.handleNameChange}
              /></label>                    
              <input type = "submit" value = "Submit" />
          </form>
          <div className = "itemList">
              <p>Prime Numbers between 1 and  {this.state.inputNumber}   are</p>
                   
                    {this.state.primeNumbers.map((el,i) => <li key={i}>{el}</li> )}
                
          </div>

          <div>
     
    </div>
      </div>
  );
}
  }
  export default (App);