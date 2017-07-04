import React, { Component } from 'react';
import logo from './assets/starwars-sensorfact.png';
import './App.css';
import { Form, FormGroup, Input } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-intro">
          <Form inline className="App-form">
          <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
            <option selected>Characters</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

            <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
           <option selected>Species</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

            <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
           <option selected>Movies</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        </Form>
        </div>
      
      </div>
    );
  }
}

export default App;
