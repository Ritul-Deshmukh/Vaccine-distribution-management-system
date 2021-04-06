import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {

  constructor(props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBlood = this.onChangeBlood.bind(this);
    this.onChangeDisease = this.onChangeDisease.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      age: '',
      email: '',
      blood: '',
      disease: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/students/edit-patient/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          age: res.data.age,
          email: res.data.email,
          blood: res.data.blood,
          disease: res.data.disease
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/students/update-patient/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Patient successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/view-patient')
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

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Details
        </Button>
      </Form>
    </div>);
  }
}
