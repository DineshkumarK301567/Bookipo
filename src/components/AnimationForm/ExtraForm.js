import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CiUser, CiMap, CiMobile1 } from "react-icons/ci";
import { LiaCitySolid } from "react-icons/lia";
import { MdOutlinePassword, MdOutlineContacts } from "react-icons/md";
import { TbMapPinCode } from "react-icons/tb";

export default function ExtraForm() {
    const location = useLocation();
    const [isEditable, setIsEditable] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        contact: '',
        state: '',
        city: '',
        pin: '',
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [passwordVisible, setPasswordVisible] = useState({
        oldPassword: false,
        newPassword: false,
        confirmNewPassword: false
    });
    const [errorMessage, setErrorMessage] = useState('');
//Profile details form
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const emailOrMobile = "Bharath123@gmail.com"; // Replace with the actual user email or mobile
                const response = await axios.get(`http://localhost:9000/profiledata/${emailOrMobile}`);
                const userData = response.data;
                setFormValues({
                    name: userData.username,
                    contact: userData.emailOrMobile,
                    state: userData.state || '',
                    city: userData.city || '',
                    pin: userData.pin || '',
                    oldPassword: userData.password,
                    newPassword: '',
                    confirmNewPassword: ''
                });
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };
        fetchProfileData();
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };

    const togglePasswordVisibility = (field) => {
        setPasswordVisible(prevState => ({ ...prevState, [field]: !prevState[field] }));
    };

    const handleUpdateClick = () => {
        setIsEditable(true);
    };

    const handleCancelClick = () => {
        setIsEditable(false);
        setErrorMessage('');
    };
// Profile details Update
    const handleSaveClick = async (e) => {
        e.preventDefault();
        if (formValues.newPassword !== formValues.confirmNewPassword) {
            setErrorMessage("Passwords don't match");
        } else {
            setErrorMessage('');
            try {
                const response = await axios.put('http://localhost:9000/updateprofile', {
                    emailOrMobile: formValues.contact,
                    username: formValues.name,
                    state: formValues.state,
                    city: formValues.city,
                    pin: formValues.pin,
                    newPassword: formValues.newPassword
                });
                console.log('Profile updated:', response.data);
                setIsEditable(false);
            } catch (error) {
                //console.error("Error updating profile:", error);
                setErrorMessage("Error updating profile");
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSaveClick}>
                <div className="ticket tic-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="input-group input-group-icon">
                                    <input className="input-text js-input" type="text" id="name" placeholder="Full Name" required disabled={!isEditable} value={formValues.name} onChange={handleInputChange} />
                                    <div className="input-icon">
                                        <CiUser className="i" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="input-group input-group-icon">
                                    <input
                                        id="contact"
                                        className="input-text js-input"
                                        placeholder="Email or Mobile number"
                                        type="text"
                                        required
                                        disabled={!isEditable}
                                        value={formValues.contact}
                                        onChange={handleInputChange}
                                    />
                                    <div className="input-icon">
                                        <MdOutlineContacts className="i" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="input-group input-group-icon">
                                    <input id="state" className="input-text js-input" placeholder="State" type="text" required disabled={!isEditable} value={formValues.state} onChange={handleInputChange} />
                                    <div className="input-icon">
                                        <CiMap className="i" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="input-group input-group-icon">
                                    <input id="city" className="input-text js-input" placeholder="City" type="text" required disabled={!isEditable} value={formValues.city} onChange={handleInputChange} />
                                    <div className="input-icon">
                                        <LiaCitySolid className="i" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="input-group input-group-icon">
                                    <input id="pin" className="input-text js-input" placeholder="Pincode" type="text" required disabled={!isEditable} value={formValues.pin} onChange={handleInputChange} />
                                    <div className="input-icon">
                                        <TbMapPinCode className="i" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="input-group input-group-icon">
                                    <input id="oldPassword" className="input-text js-input eye-icon-input" placeholder="Old Password" type={passwordVisible.oldPassword ? 'text' : 'password'} required disabled={!isEditable} value={formValues.oldPassword} onChange={handleInputChange} />
                                    <FontAwesomeIcon className="profile-eye-icon" icon={passwordVisible.oldPassword ? faEye : faEyeSlash} onClick={() => togglePasswordVisibility('oldPassword')} />
                                    <div className="input-icon">
                                        <MdOutlinePassword className="i" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="input-group input-group-icon">
                                    <input id="newPassword" className="input-text js-input eye-icon-input" placeholder="New Password" type={passwordVisible.newPassword ? 'text' : 'password'} required disabled={!isEditable} value={formValues.newPassword} onChange={handleInputChange} />
                                    <FontAwesomeIcon className="profile-eye-icon" icon={passwordVisible.newPassword ? faEye : faEyeSlash} onClick={() => togglePasswordVisibility('newPassword')} />
                                    <div className="input-icon">
                                        <MdOutlinePassword className="i" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="input-group input-group-icon">
                                    <input id="confirmNewPassword" className="input-text js-input eye-icon-input" placeholder="Confirm New Password" type={passwordVisible.confirmNewPassword ? 'text' : 'password'} required disabled={!isEditable} value={formValues.confirmNewPassword} onChange={handleInputChange} />
                                    <FontAwesomeIcon className="profile-eye-icon" icon={passwordVisible.confirmNewPassword ? faEye : faEyeSlash} onClick={() => togglePasswordVisibility('confirmNewPassword')} />
                                    <div className="input-icon">
                                        <MdOutlinePassword className="i" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="dynamic-button">
                            {!isEditable && <button className="submit-btn" type="button" value="update profile" onClick={handleUpdateClick}>Update Profile</button>}
                            {isEditable && (
                                <>
                                    <button className="submit-btn save" type="submit" value="save update">Save Update</button>
                                    <button className="submit-btn cancel" type="button" value="cancel" onClick={handleCancelClick}>Cancel</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}