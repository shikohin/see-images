import React, { Component } from 'react';
import PropTypes from 'react-proptypes';

class ResultList extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            hits: []
        };
    }

    render() {
        return <div>{this.props.hits.map((result, index) => {
            return <div key={index}>Single result</div>
        })}</div>
    }
}

ResultList.propTypes = {
    hits: PropTypes.array.isRequired
};

export default ResultList;