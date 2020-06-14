import React, { Component } from 'react'
import './main.css'
import 'antd/dist/antd.css';
import Project from './project/project'
import AboutMe from './AboutMe/AboutMe'
import Skills from './Skills/Skills'
export default class Main extends Component {

    constructor(pros) {
        super(pros)
        this.state = {
            data: {
                'pageNumber': 0,
                'pageSize': 5,
                'totalCount': 8,
                'totalPages': 2,
                'items': [
                    {
                        'id': 'ba2716df-3609-4091-93e4-6cd240a91334',
                        'projectId': 'f6a0e0b4-1719-43f0-838b-50c2388d9897',
                        'projectName': 'PET-ICT Training',
                        'projectCompany': 'FPT Software',
                        'projectCode': null,
                        'projectLead': 'tuyenttk1',
                        'projectCategory': 'Other',
                        'projectCustomerCode': 'PET-ICT',
                        'projectContractType': '',
                        'projectUrl': 'https://insight.fsoft.com.vn/jira3/projects/PETICTTRAINING',
                        'projectType': 'Internal',
                        'projectTechnology': null,
                        'projectTeamSize': 36,
                        'projectDescription': null,
                        'projectStartDate': '2020-04-01T00:00:00',
                        'projectEndDate': '2020-12-31T00:00:00',
                        'startDate': '2020-07-01T00:00:00',
                        'endDate': '2020-09-01T00:00:00',
                        'jobDescription': null,
                        'skills': [

                        ],
                        'projectRoleId': '0ce08d3c-eadd-407f-808c-73c183bbac14',
                        'projectRoleName': 'Developer ',
                        'domain': null,
                        'isDeleted': false,
                        'projectSkill': null,
                        'projectJobTitles': [

                        ],
                        'workingProcess': [

                        ],
                        'resumeProjectRole': [

                        ]
                    },
                    {
                        'id': 'c7551ee4-a872-4d67-895b-20187201a1cd',
                        'projectId': '7ee800e8-c86e-4592-810b-66cf6b60ae30',
                        'projectName': 'Talent Engine Enhancement',
                        'projectCompany': 'FPT Software',
                        'projectCode': null,
                        'projectLead': 'binhnth1',
                        'projectCategory': 'Development',
                        'projectCustomerCode': 'PET-ICT',
                        'projectContractType': 'T&M',
                        'projectUrl': 'https://insight.fsoft.com.vn/jira3/projects/TEE',
                        'projectType': 'Internal',
                        'projectTechnology': 'Microsoft based',
                        'projectTeamSize': 19,
                        'projectDescription': 'Developer Talent Engine Product including:\r\nTalent Engine 1.0 Enhancement \r\nTalent Engine 2.0 Performance Improvement\r\nTalent Engine 1.0 SQL migration SSDM',
                        'projectStartDate': '2020-01-16T00:00:00',
                        'projectEndDate': '2020-09-30T00:00:00',
                        'startDate': '2020-02-03T00:00:00',
                        'endDate': '2020-07-01T00:00:00',
                        'jobDescription': null,
                        'skills': [

                        ],
                        'projectRoleId': '0ce08d3c-eadd-407f-808c-73c183bbac14',
                        'projectRoleName': 'Developer ',
                        'domain': null,
                        'isDeleted': false,
                        'projectSkill': null,
                        'projectJobTitles': [

                        ],
                        'workingProcess': [

                        ],
                        'resumeProjectRole': [
                            {
                                'resumeProjectRoleMappingId': '72ce910b-c434-4342-90f5-4bbf5c4d3ac9',
                                'projectRoleId': '0ce08d3c-eadd-407f-808c-73c183bbac14',
                                'projectRoleDisplayName': 'Member'
                            }
                        ]
                    },
                    {
                        'id': '0f63d5fc-17de-4a15-9852-8447b8e4569f',
                        'projectId': '61df0946-4e67-4c3d-8b66-8738db0fcd6c',
                        'projectName': 'Petronas-2020',
                        'projectCompany': 'FPT Software',
                        'projectCode': null,
                        'projectLead': 'binhnth1',
                        'projectCategory': 'Development',
                        'projectCustomerCode': 'PET-ICT',
                        'projectContractType': null,
                        'projectUrl': 'https://insight.fsoft.com.vn/jira3/projects/PETRONAS2020',
                        'projectType': 'Internal',
                        'projectTechnology': 'Microsoft based',
                        'projectTeamSize': 78,
                        'projectDescription': 'Manage onsite T&M resource working for PET-Ict customer.',
                        'projectStartDate': '2019-11-01T00:00:00',
                        'projectEndDate': '2020-12-31T00:00:00',
                        'startDate': '2020-03-01T00:00:00',
                        'endDate': '2020-05-01T00:00:00',
                        'jobDescription': null,
                        'skills': [

                        ],
                        'projectRoleId': '0ce08d3c-eadd-407f-808c-73c183bbac14',
                        'projectRoleName': 'Developer ',
                        'domain': null,
                        'isDeleted': false,
                        'projectSkill': null,
                        'projectJobTitles': [

                        ],
                        'workingProcess': [

                        ],
                        'resumeProjectRole': [
                            {
                                'resumeProjectRoleMappingId': 'a50304bd-7ae1-4714-94ce-4483baef167d',
                                'projectRoleId': '0ce08d3c-eadd-407f-808c-73c183bbac14',
                                'projectRoleDisplayName': 'Member'
                            }
                        ]
                    },
                    {
                        'id': '4368f906-3a4f-483b-9de5-582d9651886f',
                        'projectId': '68e1811c-2a91-407e-8afd-7f636c3ac449',
                        'projectName': 'Internal EMU',
                        'projectCompany': 'FPT Software',
                        'projectCode': null,
                        'projectLead': 'tuyenttk1',
                        'projectCategory': 'Development',
                        'projectCustomerCode': 'PET-ICT',
                        'projectContractType': null,
                        'projectUrl': 'https://insight.fsoft.com.vn/jira3/projects/EMUINTERNAL',
                        'projectType': 'Internal',
                        'projectTechnology': '',
                        'projectTeamSize': 77,
                        'projectDescription': 'Internal',
                        'projectStartDate': '2019-01-01T00:00:00',
                        'projectEndDate': '2020-12-31T00:00:00',
                        'startDate': '2020-01-16T00:00:00',
                        'endDate': '2020-02-01T00:00:00',
                        'jobDescription': null,
                        'skills': [

                        ],
                        'projectRoleId': '0ce08d3c-eadd-407f-808c-73c183bbac14',
                        'projectRoleName': 'Developer ',
                        'domain': null,
                        'isDeleted': false,
                        'projectSkill': null,
                        'projectJobTitles': [

                        ],
                        'workingProcess': [

                        ],
                        'resumeProjectRole': [
                            {
                                'resumeProjectRoleMappingId': 'efa756b7-08ea-4585-8aba-956f4428091f',
                                'projectRoleId': '0ce08d3c-eadd-407f-808c-73c183bbac14',
                                'projectRoleDisplayName': 'Member'
                            }
                        ]
                    },
                    {
                        'id': '47833577-6dae-4959-9941-e3c29ecd0f3c',
                        'projectId': '15461c1e-0463-4431-9b9a-6e8a93830af4',
                        'projectName': '1499.PIMS_PH_01.FP',
                        'projectCompany': 'FPT Software',
                        'projectCode': null,
                        'projectLead': 'anhtnn',
                        'projectCategory': 'Development',
                        'projectCustomerCode': 'PET-ICT',
                        'projectContractType': 'Fixed Price',
                        'projectUrl': 'https://insight.fsoft.com.vn/jira3/projects/PIMSFHMEMU',
                        'projectType': 'Internal',
                        'projectTechnology': 'Microsoft based',
                        'projectTeamSize': 73,
                        'projectDescription': 'To provide access to Pipeline Integrity Management System(PIMS) that replaces the old system that has been used for over 15 years.\r\n(A fixed price project to implement iPIMS Phase 1)',
                        'projectStartDate': '2019-06-17T00:00:00',
                        'projectEndDate': '2020-05-15T00:00:00',
                        'startDate': '2019-08-01T00:00:00',
                        'endDate': '2020-01-16T00:00:00',
                        'jobDescription': 'Done',
                        'skills': [
                            {
                                'id': '1bac7895-5152-4ce9-a521-3a9e1bc56c32',
                                'skillId': 'a38d3cf7-e325-4d9e-ad9e-514847167fe9',
                                'skillName': 'Angular',
                                'isDeleted': false
                            }
                        ],
                        'projectRoleId': '0ce08d3c-eadd-407f-808c-73c183bbac14',
                        'projectRoleName': 'Developer ',
                        'domain': null,
                        'isDeleted': false,
                        'projectSkill': null,
                        'projectJobTitles': [

                        ],
                        'workingProcess': [

                        ],
                        'resumeProjectRole': [
                            {
                                'resumeProjectRoleMappingId': '9845ab78-8217-4beb-9805-1160012ae10c',
                                'projectRoleId': '0ce08d3c-eadd-407f-808c-73c183bbac14',
                                'projectRoleDisplayName': 'Member'
                            }
                        ]
                    }
                ]
            }
        };
    }

    render() {
        return (
            <div className="content-layout">
                <div className="Row">
                    <React.Fragment>
                        <Skills/>
                        <AboutMe/>
                    </React.Fragment>
                </div>
                <div className="Row">
                    <div className="Box col-12">
                        <div className="Box-v3-header">
                            {/* <h1>List XXX</h1> */}
                        </div>
                        {this.state.data.items.map((items) =>
                            <Project key={items.id} data={items}/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
