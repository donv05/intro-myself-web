import React, { Component } from 'react'
import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Modal, Form, Input, DatePicker } from 'antd';
import moment from 'moment'
import axios from '../../../../configurations/axiosConfig'


// interface FieldData {
//     name: string[];
//     value: any;
//     touched: boolean;
//     validating: boolean;
//     errors: string[];
// }

// interface CustomizedFormProps {
//     onChange: (fields: FieldData[]) => void;
//     fields: FieldData[];
// }

export default class Skills extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            layout: {
                labelCol: {
                    span: 8,
                },
                wrapperCol: {
                    span: 16,
                },
            },
            tailLayout: {
                wrapperCol: {
                    offset: 8,
                    span: 16,
                },
            },
            skills: [],
            fields: [{ name: ['skillName'], value: 'Ant Design' }, { name: ['level'], value: '1' }, { name: ['experience'], value: '2 years' }],
            setFields: [{ name: ['skillName'], value: 'Ant Design' }, { name: ['level'], value: '1' }, { name: ['experience'], value: '2 years' }],
            config: {
                rules: [{ type: 'object', required: true, message: 'Please select time!' }],
            }
        }
        this.wrapper = React.createRef();
    }

    componentDidMount() {
        axios.get('/skills')
            .then((result) => {
                const data = result.data.data.map((item) => {
                    return { ...item, year: moment(item.experience).fromNow(true) }
                })
                this.setState({
                    skills: data,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    editRow = (id, evt) => {
        const data = this.state.skills.find((item) => item._id === id)
        if (data) {
            this.setState({
                id: id,
                visible: true,
                fields: [{ name: ['skillName'], value: data.skillName }, { name: ['level'], value: data.level }, { name: ['experience'], value: moment(data.experience) }],
                setFields: [{ name: ['skillName'], value: data.skillName }, { name: ['level'], value: data.level }, { name: ['experience'], value: moment(data.experience) }],
            });
        } else {

        }

    }

    handleOk = (e) => {
        let data = this.state.fields.reduce((accumulator, item) => {
            var obj = {};
            obj[item.name[0]] = item.value;
            return accumulator = { ...accumulator, ...obj }
        }, {})
        const param = { ...data, experience: data.experience.utc().format() }
        axios.put(`/skills/${this.state.id}`, param)
            .then((result) => {
                let updatedData = result.data;
                updatedData = {...updatedData, year: moment(updatedData.experience).fromNow(true)};
                const data1 = this.state.skills;
                console.log('Skills',data1);
                data1[data1.findIndex((el => el._id===updatedData._id))] = updatedData;
                console.log('NewSkill',data1);
                this.setState({
                    skills:  data1,
                    visible: false
                });
               
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    };

    onFinish = (values) => {

    };

    onFinishFailed = (errorInfo) => {
    };

    onChange = (data) => {
        this.setState({
            fields: data,
        });
    }

    disabledDate = (current) => {
        return current && current.valueOf() > Date.now();
    }

    render() {
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        }
        return (
            <React.Fragment>
                <Modal title="Edit Skill" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Form  {...this.state.layout} fields={this.state.fields} onFieldsChange={(changedFields, allFields) => {
                        this.onChange(allFields);
                    }} name="basic" initialValues={{ remember: true, }} onFinish={this.onFinish()} onFinishFailed={this.onFinishFailed()} >
                        <Form.Item label="Skill Name" name="skillName" rules={[{ required: true, message: 'Please input Skill Name!', },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Level" name="level" rules={[{ required: true, message: 'Please input Level!', },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Experience" name="experience" {...config}>
                            <DatePicker disabledDate={this.disabledDate} format='DD/MM/YYYY'/>
                        </Form.Item>
                        <Form.Item {...this.state.tailLayout}>
                        </Form.Item>
                    </Form>
                </Modal>
                <div className="Box col-6">
                    <div className="Box-v3-header">
                        <h1>My Technical Skills</h1>
                    </div>
                    <div className="Box-v3-content Content">
                        <table className="table mts-table">
                            <thead>
                                <tr>
                                    <th>Skill Name</th><th>Level</th>
                                    <th style={{ width: '150px' }}>Experience</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.skills.map((item) =>
                                    <tr key={item._id}>
                                        <td>{item.skillName}</td>
                                        <td>{item.level}</td>
                                        <td style={{ width: '150px' }}>
                                            <div style={{ display: 'inline-flex' }}>
                                                <span>{item.year}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="mts-edit edit-resume-btn" onClick={this.editRow.bind(this, item._id)}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
