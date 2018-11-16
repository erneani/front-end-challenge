import React from 'react';
import Headline from '../headline/Headline';
import PriceContainer from '../price-container/PriceContainer';
import PanelFooter from '../panel-footer/PanelFooter';

import './style.scss';

export default class RightPanel extends React.Component {
    render() {
        return (
            <div className="base-right-panel">
                <Headline />
                <PriceContainer />
                <PanelFooter />
            </div>
        )
    }
}