import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useUser from '../../hooks/useUser';
import './UserDashboard.css';


const Settings = () => {
    const { register, handleSubmit } = useForm();
    const[user]=useUser();
    const{id,first_name,last_name, email,birth_date,nationality,phone,profession,bio}=user;

    const onSubmit = data => console.log(data);

    /* const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [bloggerName, setBloggerName] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfession] = useState('');
    const [nationality, setNationality] = useState('');
    const [birth_date, setBirth_date] = useState('');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState(''); */

    const [uploadImage, setUploadImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const [cngPass, setCngPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');


    //Handle User Profile Form
/*     const handleUserProfileForm = e => {
        e.preventDefault();
        const profileData = {
            firstName, lastName,bloggerName, birth_date, email, profession, nationality, phone, bio
        };
        console.log(profileData);
        toast.success("Profile Updated Successfully");
    }; */

    //Handle Change Password Form
    const handleCngPassword = e => {
        e.preventDefault();
        if (cngPass === confirmPass) {
            console.log(confirmPass + " is your new password");
            toast.success("Password Changed Successfully");
            e.target.reset();
        } else (
            toast.error("password not matched!")
        );

    };

//Preview updated Image
useEffect(() => {
    if (uploadImage) {
        setImageUrl(URL.createObjectURL(uploadImage));
    }
}, [uploadImage]);


return (
    <Row>
        <Col md={9} sm={12}>
            <div className="bg-white p-sm-4 p-2  rounded user-dashboard-font">
                <h3 className='px-3 fw-bold'>Information</h3>
                <form className="row form-container p-3" onSubmit={handleSubmit(onSubmit)} >
                    <div className="col-md-6">
                        <label for="firstName" className="form-label fw-bold">First Name</label>
                        <input 
                        {...register("first_name")}
                        type="text" 
                        className="form-control" 
                        id="firstName"  
                        value={first_name} />
                    </div>

                    <div className="col-md-6">
                        <label for="lastName" className="form-label fw-bold">Last Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="lastName" 
                        {...register("last_name")} 
                        value={last_name} />
                    </div>


                   {/*  <div className="col-md-12 my-3">
                        <label for="bloggerName" className="form-label fw-bold">Blogger Name</label>
                        <input type="text" className="form-control" id="bloggerName"   />
                    </div> */}

                    <div className="col-md-12 my-3">
                        <label for="email" className="form-label fw-bold">Email</label>
                        <input 
                        type="email" 
                        className="form-control"
                         id="email" 
                         {...register("email")} 
                         value={email} />
                    </div>

                    <div className="col-12">
                        <label for="date" className="form-label fw-bold">Date Of Birth</label>
                        <input 
                        type="date" 
                        className="form-control" 
                        id="date" 
                        {...register("birth_date")} 
                         value={birth_date} />
                    </div>



                    <div className="col-12 my-3">
                        <label for="profession" className="form-label fw-bold">Profession</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="profession" 
                        {...register("profession")}  
                        value={profession} />
                    </div>

                    <div className="col-md-12">
                        <label for="phone" className="form-label fw-bold">Phone</label>
                        <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        {...register("phone")}  
                        value={phone} />
                    </div>

                    <div className="col-md-12 my-3">
                        <label for="nationality" className="form-label fw-bold">Nationality</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="Nationality" 
                        {...register("nationality")}  
                        placeholder={nationality} />
                    </div>

                    <div className="mb-3">
                        <label for="bio" className="form-label fw-bold">Bio</label>
                        <textarea 
                        className="form-control" 
                        id="bio" 
                        rows="3" 
                        {...register("bio")} 
                         value={bio}></textarea>
                    </div>

                    <div className="col-12 text-center">
                        <button className='main-btn' type="submit">Submit</button>
                    </div>

                </form>
            </div>

            {/* Security */}
            <div className="bg-white p-sm-4 p-2   rounded my-5">

                <h3 className='px-3 fw-bold'>Security</h3>
                <form className='row form-container p-3' onSubmit={handleCngPassword}>
                    <div className="col-12">
                        <label for="cngPass" className="form-label fw-bold">Change Password</label>
                        <input type="password" className="form-control" id="cngPass" onChange={(e) => setCngPass(e.target.value)} required />
                    </div>
                    <div className="col-12 my-2">
                        <label for="conPass" className="form-label fw-bold">Confirm Password</label>
                        <input type="password" className="form-control" id="conPass" onChange={(e) => setConfirmPass(e.target.value)} required />
                    </div>

                    <div className="col-12 text-center ">
                        <button className='main-btn' type="submit">Submit</button>
                    </div>

                </form>
            </div>
        </Col>



        <Col md={3} sm={12} >
            <div className="bg-white p-3 rounded text-center">
                {
                    uploadImage && imageUrl && (
                        <img src={imageUrl} alt='user img' style={{ height: "200px", width: "200px", borderRadius: "50%" }} />
                    )
                }


                <div className='my-2'>
                    <label className="main-btn">Change Image
                        <input type="file" style={{ display: "none" }} required onChange={(e) => setUploadImage(e.target.files[0])} />
                    </label>
                </div>

                <p>
                    *Image size should be under 1MB image ratio 200px.
                </p>

            </div>
        </Col>
    </Row>
);
};

export default Settings;