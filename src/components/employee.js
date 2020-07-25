import React, { Component } from "react";

import Row from "./row";
import Col from "./col";


class Employee extends Component {
    render() {
        const { email, phone, name, imageSrc, dob } = this.props;
        return (
            <Row>
                <Col size="sm-2">
                    <img src={imageSrc} alt='employee avatar' />
                </Col>
                <Col size="sm-2">{name}</Col>
                <Col size="sm-3">{phone}</Col>
                <Col size="sm-3">{email}</Col>
                <Col size="sm-2">{dob}</Col>
            </Row>
        )
    }
}

export default Employee;