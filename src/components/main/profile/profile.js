import React, {useState, useEffect} from "react";
import './profile.scss'
import axios from '../../../configurations/axiosConfig'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


function Profile(props) {
    
  const info = JSON.parse(localStorage.getItem('userInformation'));
  const [base64Img, setBase64Img] = useState(info? info.user.avatar : '/default-icon.svg');
  const { register, handleSubmit, errors } = useForm(
    {
      defaultValues: {
        firstName: info.user.first_name,
        lastName: info.user.last_name,
        email: info.user.email,
        age: info.user.age,
        address: info.user.address,
      }
    }
  ); // initialise the hook
  
  //   const handleChange = handleChange;
  function handleUserChange(data) {
    let formData = new FormData()
    if(base64Img) {
      formData.append('avatar',  base64Img)
    }
    formData.append('email', data.email)
    formData.append('age', data.age)
    formData.append('first_name', data.firstName)
    formData.append('last_name', data.lastName)
    formData.append('role_id', '5ef0d90087f2a8aa0125b579')
    formData.append('address', data.address) 
    
    axios.put(`/users/${info.user._id}`,formData,{
        'x-device-id': 'stuff',
        'Content-Type': 'multipart/form-data'
      }).then((result) => {
        if(result) {
            localStorage.setItem('userInformation', JSON.stringify(result))
            toast.success("Update successfully");
        }
    })
  }

  useEffect(() => {
    // if(info) {
    //   setLinkImg(info.user.avatar)
    //   setBase64Img(info.user.avatar)
    // }
  }, [info]);

  function handleImgChange(e) {
    const img = e.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(img[0]);
    reader.onloadend = function(loaded) {
        if(loaded && loaded.target.result) {
          setBase64Img(loaded.target.result)
        }
    }
    
  }

  return (
    <React.Fragment>
      <div className="container">
        <h1 className="txt-page">Edit Profile</h1>
        <hr />
        <div className="row">
          {/* <!-- left column --> */}
          <div className="col-md-5">
            <div className="text-center">
              <img
                src={base64Img}
                className="avatar img-circle"
                alt="avatar"
              />
              {/* <h6>Upload a different photo...</h6> */}
              <div className="bnt-upload-file">
                <span >Update avatar</span>
                <input type="file" className="form-control" onChange={handleImgChange}/>
              </div>
            </div>
          </div>

          <div className="col-md-7 personal-info">
            <h3>Personal info</h3>
            <form className="form-horizontal" >
              <div className="form-group">
                <label className="col-lg-3 control-label">First name <span className="text-danger">*</span></label>
                <div className="col-lg-8">
                  <input className="form-control" type="text"  name="firstName" ref={register({ required: true })}/>
                  <p className="text-danger mt-1">{errors.firstName && 'First name is required.'}</p>
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Last name <span className="text-danger">*</span></label>
                <div className="col-lg-8">
                  <input className="form-control" type="text"  name="lastName" ref={register({ required: true })}/>
                  <p className="text-danger mt-1">{errors.lastName && 'Last name is required.'}</p>
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Age <span className="text-danger">*</span></label>
                <div className="col-lg-8">
                  <input className="form-control" type="number" name="age"  ref={register({ pattern: /\d+/ })}/>
                  <p className="text-danger mt-1">{errors.age && 'Please enter number for age.'}</p>
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Address</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" name="address" ref={register()}/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label" >Email <span className="text-danger">*</span></label>
                <div className="col-lg-8">
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    disabled
                     // eslint-disable-next-line
                    ref={register({ pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
                  />
                  
                  <p className="text-danger mt-1">{errors.email && 'Email invalid Format(example: abc@gmail.com)'}</p>
                </div>
              </div>
            </form>
            <div className="form-group">
                <label className="col-12  control-label"></label>
                <div className="col-12 ">
                  <button type="button" className="btn btn-success mr-3" onClick={handleSubmit(handleUserChange)}>Save Changes</button>
                  <button type="button" className="btn btn-secondary">Cancel</button>
                </div>
              </div>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default Profile;
