
import React, { useState } from 'react';
import './notMatch.css'


function NoMatch() {
    // let location = useLocation();
    return (
      <div className="layout-page-not-find">
        <h3>
          No match for <code>404</code>
        </h3>
      </div>
    );
  }

export default NoMatch;