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
            total: 0,
            totalHits: 0,
            hits: []
        };

        this.transformApiResponse = this.transformApiResponse.bind(this);
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
                <ResultList hits={this.state.hits} />
            </div>
        )
    }

    queryApi(q) {
        Requests.sendQuery(q, this.transformApiResponse);
    }

    transformApiResponse(err, res, body) {
        if (err) {
            // todo introduce better error handling
            console.log(err);
            return null;
        }

        let parsed = this.parseResponse(body);

        this.setState({
            total: parsed.total,
            totalHits: parsed.totalHits,
            hits: parsed.hits
        });

        console.log(parsed);
    }

    parseResponse(body) {
        return JSON.parse(body)
    }
}

export default Search;