import React, {Component} from 'react';

import './header.css';

export default class Header extends Component {
    render() {
        const {clearAll} = this.props;
        return (
            <div className="header__wrap d-flex">
                <h1 className="header__title">
                    Diet App
                </h1>
                <button type="button"
                        className="header__btn"
                        onClick = {() => clearAll()}
                        >
                    <i className="fa fa-retweet header__icon"/>
                </button>
            </div>
        );
    };
};