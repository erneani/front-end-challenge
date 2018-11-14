import React from 'react';

import './style.scss';

export default class TitleLabel extends React.Component {
    render() {
        return <h4 className="title-label"> { this.props.label } </h4>
    }
}