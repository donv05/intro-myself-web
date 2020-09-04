import React, {  } from "react";

import './timeline.css'

function Timeline() {
  return (
    <React.Fragment>
        <div className="timeline-header">
            <h1 className="timeline-header_title">My Journey</h1>
        </div>
        <div className="timeline">
            <div className="timeline-container timeline-container--left">
                <div className="timeline-container__content">
                    <h2>7/2017</h2>
                    <p>Completed all program in Can Tho University.</p>
                </div>
            </div>
            <div className="timeline-container timeline-container--right">
                <div className="timeline-container__content">
                    <h2>1/2018</h2>
                    <p>Work at TMA Solution company.</p>
                </div>
            </div>
            <div className="timeline-container timeline-container--right">
                <div className="timeline-container__content">
                    <h2>6/2018</h2>
                    <p>Work at FPT software company. Front end developer.</p>
                </div>
            </div>
            <div className="timeline-container timeline-container--left">
                <div className="timeline-container__content">
                    <h2>1/2019</h2>
                    <p>Front end developer.</p>
                </div>
            </div>
            <div className="timeline-container timeline-container--right">
                <div className="timeline-container__content">
                    <h2>6/2019</h2>
                    <p>Front end developer.</p>
                </div>
            </div>
            <div className="timeline-container timeline-container--left">
                <div className="timeline-container__content">
                    <h2>1/2020</h2>
                    <p>Front end developer.</p>
                </div>
            </div>
        </div>

    </React.Fragment>
  );
}

export default Timeline;
