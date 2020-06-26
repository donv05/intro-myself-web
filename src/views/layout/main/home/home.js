import React, { useState, useEffect } from 'react';

import Project from '../project/project'
import Introduction from '../introduction/introduction'
import Skills from '../Skills/Skills'
import axios from '../../../../configurations/axiosConfig'
import { toast } from 'react-toastify';

function Home() {
  // Declare a new state variable, which we'll call "count"
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    // Update the document title using the browser API
    axios.get('/project')
        .then((result) => {
            if(result) {
                setProjects(result)
            }
        })
        .catch(function (error) {
            toast.error('Error!')
        })
        .finally(function () {
            // always executed
        });
  }, []);

  return (
    <React.Fragment>
        <div className="row">
            {/* <React.Fragment> */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <Skills/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <Introduction/>
            </div>
                
                
            {/* </React.Fragment> */}
        </div>
        <div className="row">
            <div className="Box col-12">
                <div className="Box-v3-header">
                </div>
                {(projects && projects.data) ? projects.data.map((items) =>
                    <Project key={items._id} data={items}/>
                ): null}
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home;