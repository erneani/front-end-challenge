import React from 'react';
import LeftPanel from '../../components/left-panel/LeftPanel';
import RightPanel from '../../components/right-panel/RightPanel';

import './style.scss';

export default class Showcase extends React.Component {
    render() {
        return (
            <div className="showcase-base">
                <video className="showcase-video">
                    <source url="https://vimeo.com/22454502"/>          
                </video>
                <LeftPanel />
                <RightPanel />
            </div> 
        )
    }
}