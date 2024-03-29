import moment from 'moment';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../../hooks/url';
import useToken from '../../hooks/useToken';
import './UserDashboard.css';


import image1 from '../../Images/blank_user.png';


const Settings = ({ user,setUser,isBloggerRole }) => {
    const [token] = useToken();
    const navigate = useNavigate();

    const { id, first_name, last_name, email, birth_date, nationality, phone, profession, bio,photo,blogger_name
    } = user;
    
    const birthDateIn = moment(birth_date).format('DD/ MMM /YYYY');
    const photoShow=`${baseUrl}/${photo}`

    //Update Profile
    const [firstName, setFirstName] = useState(first_name);
    const [lastName, setLastName] = useState(last_name);
    const [bloggerName, setBloggerName] = useState(blogger_name);
        
    const [emaiL, setEmaiL] = useState(email);
    const [professioN, setProfessioN] = useState(profession);
    const [nationalitY, setNationalitY] = useState(nationality);
    const [birthDate, setBirthDate] = useState(birthDateIn);
    const [phonE, setPhonE] = useState(phone);
    const [biO, setBiO] = useState(bio);

    const [image, setImage] = useState(photoShow || image1);
    const [photO,setPhoto]=useState(null);

    // console.log(photo);
   

    //Password change
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');


    //Handle Update User Profile
    const handleUserProfileForm = async (e) => {
        e.preventDefault();
        const profileData = {
            first_name: firstName,
            last_name: lastName,
            blogger_name: bloggerName,
            birth_date: birthDate,
            email: emaiL,
            profession: professioN,
            nationality: nationalitY,
            phone: phonE,
            bio: biO,
        };
        console.log(profileData);

        //Send To Backend
        const url = `${baseUrl}/api/myprofile/update`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(profileData)
            // body: profileData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.error) {
                    console.log(result.error);
                    toast.error("Profile Update Failed");
                } else {
                    console.log(result);
                    toast.success(result.message);
                    setUser(result.user);

                    const user = JSON.stringify(result.user);
                    window.localStorage.setItem("user", user);
                    // navigate("/user-dashboard");
                }

            });
    };



    //Handle Update Password
    const handleCngPassword = e => {
        e.preventDefault();
        const updatePass = { password, password_confirmation }

        //Send To Backend
        const url = `${baseUrl}/api/myprofile/pupdate`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(updatePass)
        })
            .then(res => res.json())
            .then(result => {

                if (result.error) {
                    console.log(result.error);
                    toast.error(result.error);
                } else {
                    console.log(result);
                    // e.target.reset();
                    toast.success(result.message);
                    e.target.reset();
                }

            })
    };


    //Handle Image Change
    const handleImageChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        setPhoto(event.target.files[0]);
    };

    const handleImageClick = () => {
        const fileInput = document.getElementById("photo");
        fileInput.click();
    };

    //Handle DP Form
    const handleDPSubmit =async (e) => {
            e.preventDefault();

            const dpData  = new FormData();

            // formData.append('name', "Hamid");
            dpData.append('photo',photO, photO.name);

            console.log(dpData);
           
            const dpUrl = `${baseUrl}/api/myprofile/profilePic`;

            const response = await fetch(dpUrl, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                body:dpData
            });
        
            console.log(response);
            const result = await response.json();
    
            if (result.error) {
                console.log(result.error);
                toast.error("Profile Pic Added Failed");
            } else {
                console.log(result);
                setUser(result.user);

                const user = JSON.stringify(result.user);
                window.localStorage.setItem("user", user);
                e.target.reset();
                toast.success(result.message);
            }
        };



    return (
        <Row>
            <Col md={9} sm={12}>
                <div className="bg-white p-sm-4 p-2  rounded user-dashboard-font">
                    <h3 className='px-3 fw-bold'>Information</h3>
                    <form className="row form-container p-3" onSubmit={handleUserProfileForm} >
                        <div className="col-md-6">
                            <label for="firstName" className="form-label fw-bold">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName || ""} />
                        </div>

                        <div className="col-md-6">
                            <label for="lastName" className="form-label fw-bold">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                onChange={e => setLastName(e.target.value)}
                                value={lastName || ""} />
                        </div>

                        {
                            isBloggerRole==="blogger" &&  <div className="col-md-12 mt-3">
                            <label for="bloggerName" className="form-label fw-bold">Blogger Name</label>
                            <input 
                            type="text" 
                            onChange={e => setBloggerName(e.target.value)}
                            value={bloggerName || ""}
                            className="form-control" 
                            id="bloggerName"   />
                         </div>
                        }


                        

                        <div className="col-md-12 my-3 ">
                            <label for="email" className="form-label fw-bold">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                onChange={e => setEmaiL(e.target.value)}
                                value={emaiL || ""} />
                        </div>

                        <div className="col-12">
                            <label for="date" className="form-label fw-bold">Date Of Birth</label>
                            <input
                                type="text"
                                className="form-control"
                                id="date"
                                onChange={e => setBirthDate(e.target.value)}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                                value={birthDate || ""} />
                        </div>



                        <div className="col-12 my-3">
                            <label for="profession" className="form-label fw-bold">Profession</label>
                            <input
                                type="text"
                                className="form-control"
                                id="profession"
                                onChange={e => setProfessioN(e.target.value)}
                                value={professioN || ""} />
                        </div>

                        <div className="col-md-12">
                            <label for="phone" className="form-label fw-bold">Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                onChange={e => setPhonE(e.target.value)}
                                value={phonE} />
                        </div>

                        <div className="col-md-12 my-3">
                            <label for="nationality" className="form-label fw-bold">Nationality</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Nationality"
                                onChange={e => setNationalitY(e.target.value)}
                                value={nationalitY} />
                        </div>

                        <div className="mb-3">
                            <label for="bio" className="form-label fw-bold">Bio</label>
                            <textarea
                                className="form-control"
                                id="bio"
                                rows="3"
                                onChange={e => setBiO(e.target.value)}
                                value={biO} />
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
                            <input type="password" className="form-control" id="cngPass" onChange={(e) => setPassword(e.target.value)} placeholder="********" required />
                        </div>

                        <div className="col-12 my-2">
                            <label for="conPass" className="form-label fw-bold">Confirm Password</label>
                            <input type="password" className="form-control" id="conPass" onChange={(e) => setPassword_confirmation(e.target.value)} placeholder="********" required />
                        </div>

                        <div className="col-12 text-center ">
                            <button className='main-btn' type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </Col>



            <Col md={3} sm={12} >
                <div className="bg-white p-3 rounded text-center">
                  
                    <form onSubmit={handleDPSubmit} >
                        <div>
                            <input name="photo" type="file" id="photo" onChange={handleImageChange} style={{display: "none" }}  />

                            {image && (
                                <img src={image || image1} alt="Add Profile" onClick={handleImageClick}  style={{ width: "150px", height: "150px", borderRadius: "100%" }} />
                            ) }
                        </div>

                        {/* <input type="file"  onChange={e=>setPhoto(e.target.files[0])}/>  */}
                      
                        <button type="submit" className='main-btn'>Save Image</button>
                    </form>



                    <p>
                        *Image size should be under 1MB image ratio 200px.
                    </p>

                </div>
            </Col>
        </Row>
    );
};

export default Settings;


