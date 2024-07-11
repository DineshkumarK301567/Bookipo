import React, { useState, useEffect, useRef } from 'react';
import { CiUser, CiMail } from "react-icons/ci";
import axios from 'axios';
import { MdOutlinePassword, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

export default function Form() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [signUpData, setSignUpData] = useState({
        username: '',
        emailOrMobile: '',
        password: '',
        confirmPassword: '',
    });
    const [loginData, setLoginData] = useState({
        emailOrMobile: '',
    });
    const [signUpErrors, setSignUpErrors] = useState({});
    const [loginErrors, setLoginErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isOtpFieldVisible, setIsOtpFieldVisible] = useState(false);

    const otpRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

    useEffect(() => {
        setTimeout(() => {
            setIsSignUp(true);
        }, 200);
    }, []);

    const toggle = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSignUpChange = (e) => {
        const { id, value } = e.target;
        setSignUpData({ ...signUpData, [id]: value });
    };

    const handleLoginChange = (e) => {
        const { id, value } = e.target;
        setLoginData({ ...loginData, [id]: value });
    };
    
    const handleOtpChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...otp];
        
        if (e.key === 'Backspace' && !value) {
            if (index > 0) {
                otpRefs.current[index - 1].current.focus();
            }
        } else if (value.length <= 1) {
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < 3) {
                otpRefs.current[index + 1].current.focus();
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const getOtp = () => {
        setIsOtpFieldVisible(true);
        // Logic to send OTP should be added here
    };

    const validateSignUp = () => {
        let tempErrors = {};
        if (!signUpData.username) tempErrors.username = "Username is required";
        if (!signUpData.emailOrMobile) tempErrors.emailOrMobile = "Email or Mobile number is required";
        if (!signUpData.password) tempErrors.password = "Password is required";
        if (!signUpData.confirmPassword) tempErrors.confirmPassword = "Confirm Password is required";
        if (signUpData.password !== signUpData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";
        setSignUpErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const validateLogin = () => {
        let tempErrors = {};
        if (!loginData.emailOrMobile) tempErrors.emailOrMobile = "Email or Mobile number is required";
        if (otp.includes('')) tempErrors.otp = "OTP is required";
        setLoginErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        if (validateSignUp()) {
            try {
                const response = await axios.post('http://localhost:9000/signup', signUpData);
                console.log(response.data);

                // If registration is successful, toggle to the login page
                setIsSignUp(false);
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    console.error(error.response.data.message);
                } else {
                    console.error(error);
                }
            }
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (validateLogin()) {
            try {
                const response = await axios.post('http://localhost:9000/login', loginData);
                console.log(response.data);

                // After successful login, handle OTP verification
                if (response.data && response.data.otp) {
                    const otpResponse = await axios.post('http://localhost:9000/verifyotp', { emailOrMobile: loginData.emailOrMobile, otp });
                    console.log(otpResponse.data);
                }
            } catch (error) {
                console.error("An error occurred during login:", error);
            }
        }
    };

    return (
        <section className='login-signup'>
            <div className='main-form'>
                <div className={`container-fluid ${isSignUp ? 'sign-up' : 'sign-in'}`}>
                    <div className='row'>
                        {/* sign up */}
                        <div className='col align-items-center flex-col sign-up'>
                            <div className='form-wrapper-main align-items-center'>
                                <form className='form-main sign-up' onSubmit={handleSignUpSubmit}>
                                    <h3 className="form-title">Signup</h3>
                                    <div className='input-group-main'>
                                        <div className='icon-input'>
                                            <CiUser size={26} />
                                            <input
                                                type="text"
                                                className="form-control-main"
                                                id="username"
                                                placeholder='Username'
                                                value={signUpData.username}
                                                onChange={handleSignUpChange}
                                            />
                                            {signUpErrors.username && <span className="error">{signUpErrors.username}</span>}
                                        </div>
                                    </div>
                                    <div className='input-group-main'>
                                        <div className='icon-input'>
                                            <HiOutlineDevicePhoneMobile size={26} />
                                            <input
                                                type='text'
                                                className='form-control-main'
                                                id='emailOrMobile'
                                                placeholder='Email or Mobile'
                                                value={signUpData.emailOrMobile}
                                                onChange={handleSignUpChange}
                                            />
                                            {signUpErrors.emailOrMobile && <span className="error">{signUpErrors.emailOrMobile}</span>}
                                        </div>
                                    </div>
                                    <div className='input-group-main'>
                                        <div className='password-input'>
                                            <div className='icon-input'>
                                                <MdOutlinePassword size={26} />
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    className='form-control-main'
                                                    id="password"
                                                    placeholder='Password'
                                                    value={signUpData.password}
                                                    onChange={handleSignUpChange}
                                                />
                                                <span className='password-toggle-icon' onClick={togglePasswordVisibility}>
                                                    {showPassword ? <MdVisibility size={24} /> : <MdVisibilityOff size={24} />}
                                                </span>
                                            </div>
                                        </div>
                                        {signUpErrors.password && <span className="error">{signUpErrors.password}</span>}
                                    </div>
                                    <div className='input-group-main'>
                                        <div className='icon-input'>
                                            <MdOutlinePassword size={26} />
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                className='form-control-main'
                                                id="confirmPassword"
                                                placeholder='Confirm Password'
                                                value={signUpData.confirmPassword}
                                                onChange={handleSignUpChange}
                                            />
                                            {signUpErrors.confirmPassword && <span className="error">{signUpErrors.confirmPassword}</span>}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block signup-btn">Sign up</button>
                                    <p>
                                        <span className='login-register-notes'>
                                            Already have an account?
                                        </span>
                                        <b onClick={toggle} className="pointer login-register-notes">
                                            Sign in here
                                        </b>
                                    </p>
                                </form>
                            </div>
                        </div>
                        {/* end signup */}
                        <div className='col align-items-center flex-col sign-in'>
                            <div className='form-wrapper-main align-items-center'>
                                <form className='form-main sign-in' onSubmit={handleLoginSubmit}>
                                    <h3 className="form-title">Signin</h3>
                                    <div className='input-group-main'>
                                        <div className='icon-input'>
                                            <HiOutlineDevicePhoneMobile size={26} />
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='emailOrMobile'
                                                placeholder='Email or Mobile'
                                                value={loginData.emailOrMobile}
                                                onChange={handleLoginChange}
                                            />
                                            {loginErrors.emailOrMobile && <span className="error">{loginErrors.emailOrMobile}</span>}
                                        </div>
                                    </div>
                                    {!isOtpFieldVisible && (
                                        <button type="button" className="btn btn-primary" onClick={getOtp}>Get OTP</button>
                                    )}
                                    {isOtpFieldVisible && (
                                        <>
                                            <div className='input-group-main otp-group'>
                                                {otp.map((value, index) => (
                                                    <input
                                                        key={index}
                                                        ref={otpRefs.current[index]}
                                                        type="text"
                                                        maxLength="1"
                                                        value={value}
                                                        onChange={(e) => handleOtpChange(e, index)}
                                                        onKeyDown={(e) => handleOtpChange(e, index)}
                                                        className="otp-input"
                                                    />
                                                ))}
                                                {loginErrors.otp && <span className="error">{loginErrors.otp}</span>}
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block signin-btn">Sign in</button>
                                        </>
                                    )}
                                    <p>
                                        <span className='login-register-notes'>
                                            Don't have an account?
                                        </span>
                                        <b onClick={toggle} className="pointer login-register-notes">
                                            Sign up here
                                        </b>
                                    </p>
                                </form>
                            </div>
                        </div>

                        <div className='row content-row'>
                            <div className='col align-items-center flex-col'>
                                <div className={`text sign-in ${isSignUp ? 'hide' : ''}`}>
                                    <h2>
                                        Welcome
                                    </h2>
                                </div>
                                <div className="img sign-in"></div>
                            </div>
                            <div className='col align-items-center flex-col'>
                                <div className="img sign-up"></div>
                                <div className={`text sign-up ${isSignUp ? '' : 'hide'}`}>
                                    <h2>
                                        Join with us
                                    </h2>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
};