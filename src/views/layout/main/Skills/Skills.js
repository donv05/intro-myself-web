import React, { useState, useEffect } from 'react'
import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import axios from '../../../../configurations/axiosConfig'
import { toast } from 'react-toastify';
import { useForm, Controller} from 'react-hook-form';
import {Modal, Button} from 'react-bootstrap';
import {
  DatePicker
} from '@material-ui/pickers';


function Skills() {
    const { register, handleSubmit, errors, control , reset} = useForm(
        {
            defaultValues: {
                skillName: '',
                level: '',
                experience: null,
            }
        }
    );
    const [visible, setVisible] = useState(false);
    const [skills, setSkill] = useState(null);
    const [skillId, setSkillId] = useState(null);
    const userInfo = JSON.parse(localStorage.getItem('userInformation'));
    const roles = userInfo.user.roles;
    const isEdit = roles.some((item) => [0, 1].includes(item.level));

    useEffect(() => {
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
                toast.error('Error!')
            }
        )
    }, []);

    function editRow(id) {
        const data = skills.find((item) => item._id === id)
        if (data) {
            setSkillId(id)
            setVisible(true)
            const defaultValues = {
                skillName: data.skillName,
                level: data.level,
                experience: moment(data.experience)
            }
            reset(defaultValues)
            
            
        }
    }

    function handleOk (form ) {
        const param = { ...form, experience: form.experience.utc().format() }
        axios.put(`/skills/${skillId}`, param)
        .then((result) => {
            let updatedData = result;
            updatedData = {...updatedData, year: moment(updatedData.experience).fromNow(true)};
            const updateSkills = skills;
            updateSkills[updateSkills.findIndex((el => el._id===updatedData._id))] = updatedData;
            setSkill(updateSkills)
            setVisible(false)
                toast.success('Update successfully!')
        })
        .catch((error) => {
            toast.error('Error!')
        })
    };

    function handleCancel (e) {
        setVisible( false);
    };

    return (
        <React.Fragment>
        <Modal show={visible} onHide={handleCancel}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Skill</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="form-horizontal" >
                    <div className="form-group">
                        <label className="col-12 control-label">SkillName <span className="text-danger">*</span></label>
                        <div className="col-12">
                        <input className="form-control" type="text" placeholder="Skill"  name="skillName" ref={register({ required: true })}/>
                        <p className="text-danger mt-1">{errors.skillName && 'Skill Name is required.'}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-12 control-label">Level <span className="text-danger">*</span></label>
                        <div className="col-12">
                        <input className="form-control" type="number" placeholder="Level"   name="level" ref={register({ required: true })}/>
                        <p className="text-danger mt-1">{errors.level && 'Level is required.'}</p>
                        </div>
                    </div> 
                    <div className="form-group">
                        <label className="col-12 control-label">Year <span className="text-danger">*</span></label>
                        <div className="col-12">
                            <Controller
                                as={<DatePicker 
                                    autoOk="true"
                                    // inputRef={register({ required: true })}
                                    // disableToolbar
                                    // variant="inline"
                                    cancelLabel=""
                                    // rightArrowIcon="ReactNode"
                                    okLabel=""
                                    maxDate={new Date()}
                                    id={"experience"}
                                    // inputVariant="outlined"
                                    // label={"Appointment Date"}
                                    // required={true}
                                    // helperText={errors["experience"] && "Required..!!"}
                                    // error={errors["experience"] ? true : false}
                                    // KeyboardButtonProps={{
                                    //     "aria-label": "change date"
                                    // }}
                                    />}
                                control={control}
                                format="DD/MM/yyyy"
                                name="experience"
                                rules={{ required: true }}
                                onChange={([selected]) => {
                                // Place your logic here
                                return selected;
                                }}
                                // DateSelect value's name is selected
                                // onChange={([selected]) => selected}
                                // onChange={([selected]) => {return { value: selected };}}
                            />
                            <p className="text-danger mt-1">{errors.experience && 'Experience is required.'}</p>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCancel}>Close</Button>
                <Button variant="success" onClick={handleSubmit(handleOk)}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
        <div className="book-card">
            <div className="book-card-header">
                <h1 className="book-card-header__title">Skills</h1>
            </div>
            <div className="book-card-content u-box-shadow">
                <table className="table mts-table table--sm-responsive">
                    <thead>
                        <tr>
                            <th>Skill Name</th><th>Level</th>
                            <th style={{ width: '150px' }}>Experience</th>
                            {isEdit ? <th>Edit</th> : null}
                        </tr>
                    </thead>
                    <tbody>
                        {skills? skills.map((item) =>
                            <tr key={item._id}>
                                <td>{item.skillName}</td>
                                <td>{item.level}</td>
                                <td style={{ width: '150px' }}>
                                    <div style={{ display: 'inline-flex'}}>
                                        <span>{item.year}</span>
                                    </div>
                                </td>
                                {isEdit?
                                 <td>
                                    <div className="mts-edit edit-resume-btn" onClick={() => {editRow(item._id)}}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </div>
                                </td>: ''}
                                
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