import React, { Component } from "react";
import Header from "./header";
import Container from "./container";
import Row from "./row";
import Col from "./col";
import SearchBar from "./searchBar";
import SortButton from "./sortButton";
import Employee from "./employee";
import EmployeeData from "../employees.json";
// import API from "../utils/API";

class OmdbContainer extends Component {
    state = {
        results: EmployeeData,
        filteredResults: [],
        search: "",
        placeholder: "search"
    };

    // componentDidMount() {
    //     API.search()
    //         .then(res => this.setState({ results: res.data.results }))
    //         .catch(err => console.log(err));
    // }

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            search: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();

        const { results, search } = this.state;

        const filtered = results.filter(item => {
            return (item.name.first.toLowerCase().includes(search) ||
                item.name.last.toLowerCase().includes(search) ||
                item.cell.includes(search))
        });

        if (filtered.length < 1) {
            this.setState({ placeholder: "That search yielded no results..." })
            this.setState({ search: "" })
        }

        else {
            this.setState({ placeholder: "search" })
        };

        this.setState({ filteredResults: filtered });

    };

    alphabetizeNames = event => {
        event.preventDefault();
        const { results } = this.state;
        const sortedNames = results.sort(function (a, b) {
            var textA = a.name.last.toUpperCase();
            var textB = b.name.last.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        console.log(sortedNames)
        this.setState({ results: sortedNames })
    };

    sortByAge = event => {
        event.preventDefault();
        const { results } = this.state;
        const employeesByAge = results.sort(function (a, b) {
            var ageA = a.dob.age
            var ageB = b.dob.age
            return (ageA < ageB) ? -1 : (ageA > ageB) ? 1 : 0;
        });
        console.log(employeesByAge)
        this.setState({ results: employeesByAge })
    }

    render() {
        const { results, filteredResults } = this.state;
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <div className="col-sm-4">
                        <SearchBar
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            placeholder={this.state.placeholder}
                        />
                    </div>
                    <div className="col-sm-3">
                        <SortButton
                            alphabetizeNames={this.alphabetizeNames}
                            type="Sort Alphabetically"
                        />
                    </div>
                    <div className="col-sm-5">
                        <SortButton
                            alphabetizeNames={this.sortByAge}
                            type="Sort by Age"
                        />
                    </div>
                </Row>
                <br />
                <div className="info-header">
                    <Col size="sm-2">Image</Col>
                    <Col size="sm-2">Name</Col>
                    <Col size="sm-3">Phone</Col>
                    <Col size="sm-3">Email</Col>
                    <Col size="sm-2">DOB</Col>
                </div>
                <br />
                <hr />
                <div>
                    {
                        filteredResults.length > 0 ? (
                            filteredResults.map(item => {
                                return <Employee
                                    imageSrc={item.picture.thumbnail}
                                    name={`${item.name.first} ${item.name.last}`}
                                    phone={item.cell}
                                    email={item.email}
                                    dob={item.dob.date.split("T")[0]}
                                />
                            })
                        ) : (
                                results.map(item => {
                                    return <Employee
                                        imageSrc={item.picture.thumbnail}
                                        name={`${item.name.first} ${item.name.last}`}
                                        phone={item.cell}
                                        email={item.email}
                                        dob={item.dob.date.split("T")[0]}
                                    />
                                })
                            )
                    }
                </div>

            </Container>
        );
    }
}

export default OmdbContainer;