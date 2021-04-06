import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/AddUser";
import EditStudent from "./components/EditUser";
import StudentList from "./components/ViewUser";
import Login from "./components/Login"
import About from "./components/About"
import View from "./components/View"

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar className="nav" ariant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/add-patient"} className="nav-link">
                Vaccine Distribution Management System
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/add-patient"} className="nav-link">
                  Add Patient
                </Link>
              </Nav>

              <Nav>
                <Link to={"/view-patient"} className="nav-link">
                  View List
                </Link>
              </Nav>

              <Nav>
                <Link to={"/about"} className="nav-link">
                  About Us
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/add-patient" component={CreateStudent} />
                <Route path="/edit-patient/:id" component={EditStudent} />
                <Route path="/view-patient" component={StudentList} />
                <Route path="/about" component={About} />
                <Route path="/view/:id" component={View} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;