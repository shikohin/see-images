import React, { Component } from 'react';
import { InputGroup, Input, Label } from 'reactstrap';
import ResultList from './ResultList/ResultList';
import Requests from '../../service/Requests';


class Search extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results: []
        };
    }

    render() {
        return (
            <div className="text-center">
                <InputGroup id="main-search">
                    <Input
                        ref="searchInput"
                        placeholder="Search for images..."
                        type="text"
                        onChange={(e) => {
                            this.setState({query: e.target.value})
                        }}
                    />
                </InputGroup>
                <InputGroup id="submit-search">
                    <Input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"
                        onClick={() => {
                            this.queryApi(this.state.query)
                        }}
                    />
                </InputGroup>
                <ResultList results={this.state.results} />
            </div>
        )
    }

    queryApi(q) {
        let result = Requests.sendQuery(q);
    }
}

export default Search;