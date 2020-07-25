import React, { Component } from "react";
import Header from "./header";
import Container from "./container";
import Row from "./row";
import Col from "./col";
import SearchBar from "./searchBar";
import API from "../utils/API";
import Employee from "./employee";


class OmdbContainer extends Component {
    state = {
        results: [],
        filteredResults: [],
        search: "",
        placeholder: "search"
    };

    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        API.search()
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    }

    // searchEmployees = query => {

    // };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            search: value
        });
    };

    // // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        // this.searchMovies(this.state.search);
        const { results, search } = this.state

        const filtered = results.filter(item => {
            return (item.name.first.includes(search) ||
                item.name.last.includes(search) ||
                item.cell.includes(search))
        });

        if (filtered.length < 1) {
            // alert("That search resulted in no matches...");
            this.setState({ placeholder: "That search yielded no results..." })
            this.setState({ search: "" })
        }

        else {
            this.setState({ placeholder: "search" })
        };

        this.setState({ filteredResults: filtered });

    };

    render() {
        const { results, filteredResults } = this.state;
        return (
            <Container>
                <Row>
                    <Header></Header>
                </Row>
                <Row>
                    <SearchBar
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        placeholder={this.state.placeholder}
                    />
                </Row>
                <Row>
                    {/* <Employees></Employees> */}
                </Row>
                <Row>
                    <Col size="sm-2">Image</Col>
                    <Col size="sm-2">Name</Col>
                    <Col size="sm-3">Phone</Col>
                    <Col size="sm-3">Email</Col>
                    <Col size="sm-2">DOB</Col>
                </Row>
                <div>
                    {
                        filteredResults.length > 0 ? (
                            filteredResults.map(item => {
                                return <Employee
                                    imageSrc={item.picture.thumbnail}
                                    name={`${item.name.first} ${item.name.last}`}
                                    phone={item.cell}
                                    email={item.email}
                                    dob={item.dob.date}
                                />
                            })
                        ) : (
                                results.map(item => {
                                    return <Employee
                                        imageSrc={item.picture.thumbnail}
                                        name={`${item.name.first} ${item.name.last}`}
                                        phone={item.cell}
                                        email={item.email}
                                        dob={item.dob.date}
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