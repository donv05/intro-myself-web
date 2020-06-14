import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUserMinus } from '@fortawesome/free-solid-svg-icons'

export default class Project extends Component {

    constructor(props) {
        super(props)
    }

    formatDateToString = (date) => {
        if (date) {
            var months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            const splitDate = date.split('T');
            const dateString = splitDate[0].split('-')
            return `${months[dateString[1] - 1]} ${dateString[0]}`
        }
        return ''
    }
    render() {
        return (
            <div className="Box-v3-content Content mt-5">
                <h5>Project Experiences</h5>
                <article>
                    <div className="header-information">
                        <div className="title txt-uppercase"><h6>{this.props.data.projectName}</h6></div>
                        <div className="edit text-right">
                            <span className="pr-3 text-success text-uppercase">{this.formatDateToString(this.props.data.startDate)} - present </span>
                            <span className="px-1"><FontAwesomeIcon icon={faEdit} /></span>
                            <span className="px-1"><FontAwesomeIcon icon={faUserMinus} /></span>
                        </div>
                    </div>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>Company</p></div>
                        <div className="content col-8"><p>{this.props.data.projectCompany}</p></div>
                    </section>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>Team Size</p></div>
                        <div className="content col-8"><p>{this.props.data.projectTeamSize}</p></div>
                    </section>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>URL</p></div>
                        <div className="content col-8"><p>{this.props.data.projectCompany}</p></div>
                    </section>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>Project Lead</p></div>
                        <div className="content col-8"><p>{this.props.data.projectLead}</p></div>
                    </section>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>Project Description</p></div>
                        <div className="content col-8"><p>{this.props.data.projectDescription}</p></div>
                    </section>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>Project Technology</p></div>
                        <div className="content col-8"><p>{this.props.data.projectTechnology}</p></div>
                    </section>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>Project Role</p></div>
                        <div className="content col-8"><p>{this.props.data.projectRoleName}</p></div>
                    </section>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>Skills</p></div>
                        <div className="content col-8"><p>{this.props.data.projectSkill}</p></div>
                    </section>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>Domain</p></div>
                        <div className="content col-8"><p>{this.props.data.domain}</p></div>
                    </section>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>Job Title</p></div>
                        <div className="content col-8"><p>{this.props.data.projectJobTitles?.[0]}</p></div>
                    </section>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>Working Process</p></div>
                        <div className="content col-8"><p>{this.props.data.workingProcess}</p></div>
                    </section>
                    <section className="Row row-inline">
                        <div className="title col-4"><p>Responsibility</p></div>
                        <div className="content col-8"><p>{this.props.data.value}</p></div>
                    </section>

                </article>
            </div>
        )
    }
}
