import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './filterItem.css'

export default class FilterItem extends Component {
    static propTypes = {
        text: PropTypes.string
    }

    constructor(props){
        super(props);

        this.handleClear = this.handleClear.bind(this);
    }
    render() {
        const {text} = this.props;
        return (
            <div>
                <div className='filter-item d-flex flex-row justify-content-between align-items-center'>
                    <span>{text}<i className='fa fa-times' onClick={() => this.handleClear(text)}></i></span>
                </div>
            </div>
        )
    }

    handleClear(text){
        this.props.handleClear(text)
    }
}