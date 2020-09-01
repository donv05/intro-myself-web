import React, { useState } from "react";
import Timeline from '../timeline/timeline'
import "./blog.css"

function Blog() {

  return (
    <React.Fragment>
        <Timeline></Timeline>
        <div className="blog-navigation blog-navigation--modify">
          <a className="blog-navigation__link" href={`/web/home`}>
          <span className="blog-navigation__link-name">Read more details</span> 
            <span>
              <svg id="icon-arrow-right" viewBox="0 0 24 8" height="8">
                <path fill="red" d="M.48,3.24H21.66l-1.78-2a.57.57,0,0,1-.14-.38.55.55,0,0,1,.14-.37l.28-.32A.41.41,0,0,1,20.48,0a.43.43,0,0,1,.33.15l3.05,3.48a.56.56,0,0,1,0,.74L20.81,7.85a.43.43,0,0,1-.33.15.41.41,0,0,1-.32-.15l-.28-.32a.56.56,0,0,1,0-.74l1.8-2H.47A.51.51,0,0,1,0,4.21V3.77A.51.51,0,0,1,.48,3.24Z"></path>
              </svg>
            </span>
          </a>
        </div>
    </React.Fragment>
  );
}

export default Blog;
