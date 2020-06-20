import React, { useState, useEffect } from 'react';

import Project from '../project/project'
import Introduction from '../introduction/introduction'
import Skills from '../Skills/Skills'
import axios from '../../../../configurations/axiosConfig'

function Home() {
  // Declare a new state variable, which we'll call "count"
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    // Update the document title using the browser API
    axios.get('/project')
        .then((result) => {
            if(result && result.data) {
                setProjects(result.data)
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
  }, []);

  return (
    <React.Fragment>
        <div className="Row">
            <React.Fragment>
                <Skills/>
                <Introduction/>
            </React.Fragment>
        </div>
        <div className="Row">
            <div className="Box col-12">
                <div className="Box-v3-header">
                </div>
                {projects ? projects.data.map((items) =>
                    <Project key={items._id} data={items}/>
                ): ''}
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home;