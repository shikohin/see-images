import React, { Component } from 'react';
import PropTypes from 'react-proptypes';

class ResultList extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            results: []
        };
    }

    render() {
        return <div>{this.props.results.map((result, index) => {
            return <div>Single result</div>
        })}</div>
    }

    searchForResults(q) {

    }
}

ResultList.propTypes = {
    results: PropTypes.array.isRequired
};

export default ResultList;