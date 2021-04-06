import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './ViewUserData.css'

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:4000/students/delete-patient/' + this.props.obj._id)
            .then((res) => {
                console.log('Patient successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.age}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.blood}</td>
                <td>{this.props.obj.disease}</td>
                <td>
                    <Link className="edit-link butt2" to={"/edit-patient/" + this.props.obj._id}>
                        Edit
                    </Link>&nbsp;
                    
                </td>
                <td><Button className="butt3" onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button></td>
                <td><Link className="edit-link butt1" to={"/view/" + this.props.obj._id}>
                        View
                    </Link>&nbsp;</td>
            </tr>
        );
    }
}