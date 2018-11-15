import React from 'react';
import LeftPanel from '../../components/left-panel/LeftPanel';
import RightPanel from '../../components/right-panel/RightPanel';

import './style.scss';

export default class Showcase extends React.Component {
    render() {
        return (
            <div className="showcase-base">
                <LeftPanel />
                <RightPanel />
            </div> 
        )
    }
}