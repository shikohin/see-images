import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';

class SearchBox extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <InputGroup id="submit-search">
                <Input
                    onClick={() => {
                        console.log(this.refs.searchInput)
                    }}
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                />
            </InputGroup>
        )
    }
}

export default SearchBox;