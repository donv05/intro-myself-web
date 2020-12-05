import React, {  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './project.css'

function Project(props) {

    const userInfo = JSON.parse(localStorage.getItem('userInformation'));
    const roles = userInfo.user.roles;
    const isEdit = roles ? roles.some((item) => [0, 1].includes(item.level)): false;

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
        <div className="book-card-item book-card-content u-box-shadow">
            {/* <h5>Project Experiences</h5> */}
            <article>
                <div className="header-information">
                    <div className="header-information__left"><h6 className="header-information__title">{props.data.projectName}</h6></div>
                    <div className="header-information__right">
                        <p className="header-information__right-title">{formatDateToString(props.data.startDate)} - present </p>
                        {isEdit ? <span className="px-1"><FontAwesomeIcon icon={faEdit} /></span> : ''}
                    </div>
                </div>
                <div>
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
