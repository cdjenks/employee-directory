import React, { Component } from "react";
import Col from "./col";
import "../styles/index.css";


class Employee extends Component {
    render() {
        const { email, phone, name, imageSrc, dob } = this.props;
        return (
            <div className="row employee-row">
                <Col size="sm-2">
                    <img src={imageSrc} alt="employee avatar" />
                </Col>
                <Col size="sm-2">{name}</Col>
                <Col size="sm-3">{phone}</Col>
                <Col size="sm-3">{email}</Col>
                <Col size="sm-2">{dob}</Col>
            </div>
        )
    }
}

export default Employee;