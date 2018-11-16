import React from 'react';
import LeftPanel from '../../components/left-panel/LeftPanel';
import RightPanel from '../../components/right-panel/RightPanel';
//import BackgroundVideo from '../../components/background-video/BackgroundVideo';

import './style.scss';

export default class Showcase extends React.Component {
    render() {
        return (
            <div className="showcase-base">
                <LeftPanel />
                <RightPanel />
                { /*<BackgroundVideo url="https://vimeo.com/22454502" /> */}
            </div> 
        )
    }
}