import React from 'react';
import FormTop from '../form-top/FormTop';
import FormBody from '../form-body/FormBody';

import './style.scss';

export default class Form extends React.Component {
    render () {
        return(
            <form className="form-base" method={ this.props.method }>
                <FormTop />
                <FormBody />
            </form>
        )
    }
}