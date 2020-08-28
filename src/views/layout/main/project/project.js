import React, {  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import './project.css'

function Project(props) {
    function formatDateToString (date) {
        if (date) {
            var months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            const splitDate = date.split('T');
            const dateString = splitDate[0].split('-')
            return `${months[dateString[1] - 1]} ${dateString[0]}`
        }
        return ''
    }

    return (
        <div className="book-card-item book-card-content my-3 u-box-shadow">
            {/* <h5>Project Experiences</h5> */}
            <article>
                <div className="header-information">
                    <div className="title txt-project"><h6>{props.data.projectName}</h6></div>
                    <div className="edit text-right">
                        <span className="pr-3 text-success title-date">{formatDateToString(props.data.startDate)} - present </span>
                        <span className="px-1"><FontAwesomeIcon icon={faEdit} /></span>
                        {/* <span className="px-1"><FontAwesomeIcon icon={faUserMinus} /></span> */}
                    </div>
                </div>
                <div className="px-3">
                    <section className="row row-inline">
                        <div className="title col-4"><p>Company</p></div>
                        <div className="content col-8"><p>{props.data.projectCompany}</p></div>
                    </section>
                    <section className="row row-inline">
                        <div className="title col-4"><p>Team Size</p></div>
                        <div className="content col-8"><p>{props.data.projectTeamSize}</p></div>
                    </section>
                    {/* <section className="row row-inline">
                        <div className="title col-4"><p>URL</p></div>
                        <div className="content col-8"><p>{props.data.projectCompany}</p></div>
                    </section> */}
                    <section className="row row-inline">
                        <div className="title col-4"><p>Project Lead</p></div>
                        <div className="content col-8"><p>{props.data.projectLead}</p></div>
                    </section>
                    <section className="row row-inline">
                        <div className="title col-4"><p>Project Description</p></div>
                        <div className="content col-8"><p>{props.data.projectDescription}</p></div>
                    </section>
                    <section className="row row-inline">
                        <div className="title col-4"><p>Project Technology</p></div>
                        <div className="content col-8"><p>{props.data.projectTechnology}</p></div>
                    </section>
                    <section className="row row-inline">
                        <div className="title col-4"><p>Project Role</p></div>
                        <div className="content col-8"><p>{props.data.projectRoleName}</p></div>
                    </section>
                    <section className="row row-inline">
                        <div className="title col-4"><p>Skills</p></div>
                        <div className="content col-8"><p>{props.data.projectSkill}</p></div>
                    </section>
                    {/* <section className="row row-inline">
                        <div className="title col-4"><p>Domain</p></div>
                        <div className="content col-8"><p>{props.data.domain}</p></div>
                    </section> */}
                    {/* <section className="row row-inline">
                        <div className="title col-4"><p>Job Title</p></div>
                        <div className="content col-8"><p>{props.data.projectJobTitles[0]}</p></div>
                    </section> */}
                    {/* <section className="row row-inline">
                        <div className="title col-4"><p>Working Process</p></div>
                        <div className="content col-8"><p>{props.data.workingProcess}</p></div>
                    </section> */}
                    {/* <section className="row row-inline">
                        <div className="title col-4"><p>Responsibility</p></div>
                        <div className="content col-8"><p>{props.data.value}</p></div>
                    </section> */}
                </div>
            </article>
        </div>
    )
}

export default Project;
