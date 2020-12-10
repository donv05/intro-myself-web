import React, { useState, useEffect } from 'react';

import Project from '../project/project'
import './home.scss'
import Introduction from '../introduction/introduction'
import Skills from '../Skills/Skills'
import axios from '../../../configurations/axiosConfig'
import { toast } from 'react-toastify';

function Home() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        axios.get('/project')
            .then((result) => {
                if(result && result.data.length > 0 ) {
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
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 u-sm-mt-2">
                    <Introduction/>
                </div>
                    
                    
                {/* </React.Fragment> */}
            </div>
            <div className="card-list box-container">
                <h3 className="card-list__title u-sm-mt-2 heading-secondary">Projects</h3>
                <div className="card-list__content u-grid-container u-grid-container-column-2 u-grid-container-column-1">
                    {(projects && projects.data) ? projects.data.map((items) =>
                        <Project key={items._id} data={items}/>
                    ): null}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;