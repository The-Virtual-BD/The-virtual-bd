import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './UserDashboard.css';


const Settings = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [bloggerName, setBloggerName] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfession] = useState('');
    const [nationality, setNationality] = useState('');
    const [birth_date, setBirth_date] = useState('');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');

    const [uploadImage, setUploadImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const [cngPass, setCngPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');


    //Handle User Profile Form
    const handleUserProfileForm = e => {
        e.preventDefault();
        const profileData = {
            firstName, lastName,bloggerName, birth_date, email, profession, nationality, phone, bio
        };
        console.log(profileData);
        toast.success("Profile Updated Successfully");
    };

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
                <form className="row form-container p-3" onSubmit={handleUserProfileForm} >
                    <div class="col-md-6">
                        <label for="firstName" class="form-label fw-bold">First Name</label>
                        <input type="text" class="form-control" id="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                    </div>

                    <div class="col-md-6">
                        <label for="lastName" class="form-label fw-bold">Last Name</label>
                        <input type="text" class="form-control" id="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    </div>


                    <div class="col-md-12 my-3">
                        <label for="bloggerName" class="form-label fw-bold">Blogger Name</label>
                        <input type="text" class="form-control" id="bloggerName" onChange={(e) => setBloggerName(e.target.value)} value={bloggerName} />
                    </div>

                    <div class="col-md-12 my-3">
                        <label for="email" class="form-label fw-bold">Email</label>
                        <input type="email" class="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>

                    <div class="col-12">
                        <label for="date" class="form-label fw-bold">Date Of Birth</label>
                        <input type="date" class="form-control" id="date" onChange={(e) => setBirth_date(e.target.value)} value={birth_date} />
                    </div>



                    <div class="col-12 my-3">
                        <label for="profession" class="form-label fw-bold">Profession</label>
                        <input type="text" class="form-control" id="profession" onChange={(e) => setProfession(e.target.value)} value={profession} />
                    </div>

                    <div class="col-md-12">
                        <label for="phone" class="form-label fw-bold">Phone</label>
                        <input type="number" class="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    </div>

                    <div class="col-md-12 my-3">
                        <label for="nationality" class="form-label fw-bold">Nationality</label>
                        <input type="text" class="form-control" id="Nationality" onChange={(e) => setNationality(e.target.value)} value={nationality} />
                    </div>

                    <div class="mb-3">
                        <label for="bio" class="form-label fw-bold">Bio</label>
                        <textarea class="form-control" id="bio" rows="3" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                    </div>

                    <div class="col-12 text-center">
                        <button className='main-btn' type="submit">Submit</button>
                    </div>

                </form>
            </div>

            <div className="bg-white p-sm-4 p-2   rounded my-5">

                <h3 className='px-3 fw-bold'>Security</h3>
                <form className='row form-container p-3' onSubmit={handleCngPassword}>
                    <div class="col-12">
                        <label for="cngPass" class="form-label fw-bold">Change Password</label>
                        <input type="password" class="form-control" id="cngPass" onChange={(e) => setCngPass(e.target.value)} required />
                    </div>
                    <div class="col-12 my-2">
                        <label for="conPass" class="form-label fw-bold">Confirm Password</label>
                        <input type="password" class="form-control" id="conPass" onChange={(e) => setConfirmPass(e.target.value)} required />
                    </div>

                    <div class="col-12 text-center ">
                        <button className='main-btn' type="submit">Submit</button>
                    </div>

                </form>
            </div>
        </Col>



        <Col md={3} sm={12} >
            <div class="bg-white p-3 rounded text-center">
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