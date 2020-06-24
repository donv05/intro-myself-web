import React, { useState, useEffect } from 'react'
import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
// import { Modal, Form, Input, DatePicker } from 'antd';
import moment from 'moment'
import axios from '../../../../configurations/axiosConfig'
import { toast } from 'react-toastify';
import { useForm, Controller} from 'react-hook-form';

import {Modal, Button} from 'react-bootstrap';
import {
  DatePicker
} from '@material-ui/pickers';


function Skills() {

    const [visible, setVisible] = useState(false);
    const [experience, setExperience] = useState('12/12/2020');
    
    const [skills, setSkill] = useState(null);
    const { control, register, handleSubmit, errors } = useForm(
        {
          defaultValues: {
            skillName: '',
            level: '',
            experience: '',
          }
        }
      );

    useEffect(() => {
        // Update the document title using the browser API
        axios.get('/skills')
            .then((result) => {
                if(result) {
                    const data = result.data.map((item) => {
                        return { ...item, year: moment(item.experience).fromNow(true) }
                    })
                    setSkill(data)
                }
            })
            .catch(function (error) {
                console.log(error)
                toast.error('Error!')
            })
    }, []);

    function editRow(id) {
        console.log(id)
        const data = skills.find((item) => item._id === id)
        if (data) {
            setVisible(true)
            
        } else {

        }
    }

    function handleOk (form ) {
        console.log(form)
        //     var obj = {};
        //     obj[item.name[0]] = item.value;
        //     return accumulator = { ...accumulator, ...obj }
        // }, {})
        // const param = { ...data, experience: data.experience.utc().format() }
        // axios.put(`/skills/${this.state.id}`, param)
        //     .then((result) => {
        //         let updatedData = result;
        //         updatedData = {...updatedData, year: moment(updatedData.experience).fromNow(true)};
        //         const data1 = this.state.skills;
        //         console.log('Skills',data1);
        //         data1[data1.findIndex((el => el._id===updatedData._id))] = updatedData;
        //         console.log('NewSkill',data1);
        //         this.setState({
        //             skills:  data1,
        //             visible: false
        //         });
               
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         // always executed
        //     });
    };

    function handleCancel (e) {
        setVisible( false);
    };

    // function disabledDate (current) {
    //     return current && current.valueOf() > Date.now();
    // }

    return (
        <React.Fragment>
        <Modal show={visible} onHide={handleCancel}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Skill</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="form-horizontal" >
                <div className="form-group">
                    <label className="col-lg-3 control-label">SkillName <span className="text-danger">*</span></label>
                    <div className="col-lg-8">
                    <input className="form-control" type="text"  name="skillName" ref={register({ required: true })}/>
                    <p className="text-danger mt-1">{errors.skillName && 'Skill Name is required.'}</p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-3 control-label">Level <span className="text-danger">*</span></label>
                    <div className="col-lg-8">
                    <input className="form-control" type="number"  name="level" ref={register({ required: true })}/>
                    <p className="text-danger mt-1">{errors.level && 'Level is required.'}</p>
                    </div>
                </div> 
                <div className="form-group">
                    <label className="col-lg-3 control-label">Year <span className="text-danger">*</span></label>
                    <div className="col-lg-8">
                         <Controller
                            as={DatePicker}
                            control={control}
                            format="DD/MM/yyyy"
                            name="experience"
                            defaultValue = {experience}
                            onChange={args => setExperience(new Date() + 1)}
                            rules={{ required: true }}
                        />
                        <p className="text-danger mt-1">{errors.experience && 'Experience is required.'}</p>
                    </div>
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSubmit(data => console.log(data))}>
                Save Changes
            </Button>
            </Modal.Footer>
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
                        {skills? skills.map((item) =>
                            <tr key={item._id}>
                                <td>{item.skillName}</td>
                                <td>{item.level}</td>
                                <td style={{ width: '150px' }}>
                                    <div style={{ display: 'inline-flex' }}>
                                        <span>{item.year}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="mts-edit edit-resume-btn" onClick={() => editRow(item._id)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </div>
                                </td>
                            </tr>
                        ): null}
                    </tbody>
                </table>
            </div>
        </div>
        </React.Fragment>
    )
}


export default Skills