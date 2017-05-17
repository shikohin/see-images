import React, { Component } from 'react';
import { InputGroup, Input, Label } from 'reactstrap';

class Search extends Component
{
    render() {
        return (
            <div className="text-center">
                <InputGroup id="main-search">
                    <Input placeholder="Search for images..." type="text" />
                </InputGroup>
                <InputGroup id="submit-search">
                    <Input
                        onClick={() => {
                            console.log('on tap')
                        }}
                        type="submit"
                        value="Submit"
                        className="btn btn-primary"
                    />
                </InputGroup>
            </div>
        )
    }
}

export default Search;