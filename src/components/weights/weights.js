import React, {Component} from 'react';

import './weights.css';

export default class Weights extends Component {
    currentChange = (e) => {
        const {onCurrectChange = () => {}} = this.props;
        onCurrectChange(e.target.value);
    }
    wantChange = (e) => {
        const {onWantChange = () => {}} = this.props;
        onWantChange(e.target.value);
    }

    componentDidUpdate = (prevProps, prevState) => {
        const {onValueReady = () => {}} = this.props;
        if(this.props.current !== prevProps.current || this.props.want !== prevProps.want) { 
            onValueReady((this.props.current - this.props.want) * 7716 );
        }
    }

    render() {
        const ans = (this.props.current - this.props.want) * 7716;
        return (     
            <div className="weights__wrap">
                <div className="weights__wrap2 d-flex align-center">
                    <p className="weights__text">
                        Enter your current weight (kg)
                    </p>
                    <input className="weights__input"
                    type="number"
                    onChange={this.currentChange}
                    value={this.props.current}/>
                </div>
                <div className="weights__wrap2 d-flex align-center">
                    <p className="weights__text">
                        Enter the weight you want to have (kg)
                    </p>
                    <input className="weights__input"
                    type="number"
                    onChange={this.wantChange}
                    value={this.props.want}/>
                </div>
                <div className="weights__wrap_icon d-flex">
                    <i className="fa fa-arrow-down"></i>
                </div>
                <div className="weights__wrap2 d-flex align-center">
                    <p className="weights__text">
                        {`You need to burn: ${ans} calories`}
                    </p>
                </div>
                <div className="weights__wrap2 d-flex align-center justify-content-center">
                    <div className="weights__line"></div>
                </div>
            </div>
        );
    };
};