import moment from 'moment';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../../hooks/url';
import useToken from '../../hooks/useToken';
import './UserDashboard.css';


import image1 from '../../Images/blogger.png';


const Settings = ({ user }) => {
    const [token] = useToken();
    const navigate = useNavigate();

    const { id, first_name, last_name, email, birth_date, nationality, phone, profession, bio } = user;
    const birthDateIn = moment(birth_date).format('DD/ MMM /YYYY')

    //Update Profile
    const [firstName, setFirstName] = useState(first_name);
    const [lastName, setLastName] = useState(last_name);
    const [bloggerName, setBloggerName] = useState('');
    const [emaiL, setEmaiL] = useState(email);
    const [professioN, setProfessioN] = useState(profession);
    const [nationalitY, setNationalitY] = useState(nationality);
    const [birthDate, setBirthDate] = useState(birthDateIn);
    const [phonE, setPhonE] = useState(phone);
    const [biO, setBiO] = useState(bio);

    const [image, setImage] = useState(image1);

    // const [uploadImage, setUploadImage] = useState();
    // const [imageUrl, setImageUrl] = useState(image1);

    //Password change
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');


    // console.log(uploadImage)

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
        const url = `${baseUrl}/api/myprofile/update/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // 'Content-Type': 'multipart/form-data',
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
                    const user = JSON.stringify(result.user)

                    window.localStorage.setItem("user", user);
                    // navigate("/user-dashboard")
                }

            });
    };



    //Handle Update Password
    const handleCngPassword = e => {
        e.preventDefault();
        const updatePass = { password, password_confirmation }

        //Send To Backend
        const url = `${baseUrl}/api/myprofile/pupdate/${id}`;
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



    /* //Preview updated Image
    useEffect(() => {
        if (uploadImage) {
            setImageUrl(URL.createObjectURL(uploadImage));
        }
    }, [uploadImage]);
 */


    //Handle Image Change

    const handleImageChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleImageClick = () => {
        const fileInput = document.getElementById("image");
        fileInput.click();
    };

    const handleDPSubmit = (event) => {
        event.preventDefault();

        const file = event.target.image.files[0];
        console.log(file)

        if (!file) {
            console.error("No file selected");
            return;
        };

        const imgData = new FormData();
        imgData.append("photo", file);

        console.log(imgData)



        //Send To Backend
        const url = `${baseUrl}/api/myprofile/profilePic/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'multipart/form-data',
                "Authorization": `Bearer ${token}`
            },
            body: imgData
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
                    // event.target.reset();
                }

            })

        // setImage(null);
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
                                // {...register("first_name")} 
                                value={firstName || ""} />
                        </div>

                        <div className="col-md-6">
                            <label for="lastName" className="form-label fw-bold">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                onChange={e => setLastName(e.target.value)}
                                // {...register("last_name")} 
                                value={lastName || ""} />
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
                    {/*  <form >
                        <img
                            src={imageUrl}
                            alt=""
                            srcset="" style={{ width: "200px", borderRadius: "100%", marginBottom: "10px" }} />

                        <label className='main-btn' type="submit"> Change Image
                            <input type="file" style={{ display: "none" }} onChange={(e) => setUploadImage(e.target.files[0])} required />
                        </label>
                    </form> */}


                    <form onSubmit={handleDPSubmit} >
                        <div>
                            <input type="file" id="image" onChange={handleImageChange} style={{ display: "none" }} />
                            {image ? (
                                <img src={image} alt="Preview" onClick={handleImageClick} style={{ width: "200px", height: "200px", borderRadius: "100%" }} />
                            ) : (
                                <div onClick={handleImageClick}>Click to select an image</div>
                            )}
                        </div>
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



/* 
function App() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", event.target.image.files[0]);

    // Add code here to send the form data to the backend
    // ...

    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" id="image" onChange={handleImageChange} />
      {image && <img src={image} alt="Preview" />}
      <button type="submit">Submit</button>
    </form>
  );
} */


