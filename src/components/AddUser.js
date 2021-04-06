import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './AddUser.css'

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBlood = this.onChangeBlood.bind(this);
    this.onChangeDisease = this.onChangeDisease.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      age: '',
      email: '',
      blood: '',
      disease: ''
    }
  }

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeAge(e) {
    this.setState({ age: e.target.value })
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeBlood(e) {
    this.setState({ blood: e.target.value })
  }

  onChangeDisease(e) {
    this.setState({ disease: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      blood: this.state.blood,
      disease: this.state.disease
    };

    axios.post('http://localhost:4000/students/add-patient', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      age: '',
      email: '',
      blood: '',
      disease: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
        </Form.Group>

        <Form.Group controlId="Age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" value={this.state.age} onChange={this.onChangeAge} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail} />
        </Form.Group>

        <Form.Group controlId="Blood">
          <Form.Label>Blood Group</Form.Label>
          <Form.Control type="text" value={this.state.blood} onChange={this.onChangeBlood} />
        </Form.Group>

        <Form.Group controlId="Disease">
          <Form.Label>Disease (if any)</Form.Label>
          <Form.Control type="text" value={this.state.disease} onChange={this.onChangeDisease} />
        </Form.Group>

        <Button className="butt" variant="danger" size="lg" block="block" type="submit">
          Add Details
        </Button>
      </Form>
    </div>);
  }
}
