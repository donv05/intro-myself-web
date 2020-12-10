import React, {  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './project.scss'

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
        <div className="card">
            <div className="card__header">
                <div className="card__header-left">
                    <h6 className="card__title">{props.data.projectName}</h6>
                </div>
                <div className="card__header-right">
                    <p className="card__title">{formatDateToString(props.data.startDate)} - present</p>
                    {isEdit ? <span className="px-1"><FontAwesomeIcon icon={faEdit} /></span> : ''}
                </div>
            </div>
            <div className="card__content u-box-shadow">
                <section className="card__section">
                    <div className="card__key"><p>Company</p></div>
                    <div className="card__value"><p>{props.data.projectCompany}</p></div>
                </section>
                <section className="card__section">
                    <div className="card__key"><p>Team Size</p></div>
                    <div className="card__value"><p>{props.data.projectTeamSize}</p></div>
                </section>
                <section className="card__section">
                    <div className="card__key"><p>Project Lead</p></div>
                    <div className="card__value"><p>{props.data.projectLead}</p></div>
                </section>
                <section className="card__section">
                    <div className="card__key"><p>Project Description</p></div>
                    <div className="card__value"><p>{props.data.projectDescription}</p></div>
                </section>
                <section className="card__section">
                    <div className="card__key"><p>Project Technology</p></div>
                    <div className="card__value"><p>{props.data.projectTechnology}</p></div>
                </section>
                <section className="card__section">
                    <div className="card__key"><p>Project Role</p></div>
                    <div className="card__value"><p>{props.data.projectRoleName}</p></div>
                </section>
                <section className="card__section">
                    <div className="card__key"><p>Skills</p></div>
                    <div className="card__value"><p>{props.data.projectSkill}</p></div>
                </section>
            </div>
        </div>
    )
}

export default Project;
