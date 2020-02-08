import React, {Component} from 'react';
import Header from '../header/header';
import Weights from '../weights/weights';
import Remain from '../remain/remain';

import './app.css';

export default class App extends Component {
    state = {
        current: '',
        want: '',
        burned: '',
        calories: ''
    }

    onCurrectChange = (current) => {
        this.setState({current});
    };

    onWantChange = (want) => {
        this.setState({want});
    };

    onRemainChange = (burned) => {
        this.setState({burned});
    };

    onValueReady = (calories) => {
        this.setState({calories});
    };

    clearAll = () => {
        this.setState ({
            current: '',
            want: '',
            calories: '',
            burned: ''
        });
    };

    render() {
        const {calories, current, want, burned} = this.state;
        return (
            <div className = "wrap d-flex">
                <div className = "wrap-2 d-flex">
                    <Header clearAll = {this.clearAll}/>
                    <Weights onValueReady = {this.onValueReady}
                    onCurrectChange = {this.onCurrectChange}
                    onWantChange = {this.onWantChange}
                    want = {want}
                    current = {current}
                    />
                    <Remain calories = {calories}
                    burned = {burned}
                    onRemainChange = {this.onRemainChange}
                    />
                </div>
            </div>
        );
    };
};