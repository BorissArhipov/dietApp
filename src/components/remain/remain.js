import React, {Component} from 'react';

import './remain.css';

export default class Remain extends Component {

    remainChange = (e) => {
        const {onRemainChange = () => {}} = this.props;
        onRemainChange(e.target.value);
    }
    render() {
        const {calories, burned} = this.props;
        return (
            <div className="remain__wrap d-flex">
                <p>
                    How many calories have you already burned?
                </p>
                <div className="remain__wrap2 d-flex justify-content-center">
                    <input className="remain__input"
                    type="number"
                    onChange={this.remainChange}
                    value={burned}
                    />
                    <i className="fa fa-arrow-right remain__icon"></i>
                    <p className="remain__text">
                        {`${calories - burned} calories left`}
                    </p>
                </div>
            </div>
        );
    };
};