import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Primethink", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'DineshKumar2672000@gmail.com', // Replace with your email
        pass: 'Dinesh@123' // Replace with your generated app password
    }
});

// Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    emailOrMobile: { type: String, required: true },
    password: { type: String, required: true },
    state:{type:String},
    city:{type:String},
    pin:{type:String},
    otp: { type: String }
});
const userModel = mongoose.model('Bookipo', userSchema);

// Helper function to validate email
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Routes

// Signup route
app.post('/signup', async (req, res) => {
    const { username, emailOrMobile, password} = req.body;

    try {
        // Check if user already exists
        let user = await userModel.findOne({ emailOrMobile });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new userModel({
            username,
            emailOrMobile,
            password
        });

        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { emailOrMobile, password } = req.body;

    try {
        // Check if user exists
        let user = await userModel.findOne({ emailOrMobile });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate password (add bcrypt or another encryption library for secure password handling)
        // if (user.password !== password) {
        //     return res.status(401).json({ message: 'Invalid credentials' });
        // }

        // Check if emailOrMobile is a valid email
        if (!isValidEmail(emailOrMobile)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // Generate OTP (for demonstration purposes, a simple random 4-digit OTP)
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        user.otp = otp;
        await user.save();

        // Send OTP via email
        const mailOptions = {
            from: 'Dineshkumar2672000@gmail.com', // Replace with your email
            to: emailOrMobile,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Error sending email' });
            } else {
                console.log('Email sent:', info.response);
                res.status(200).json({ message: 'OTP generated and sent via email' });
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// OTP verification route
app.post('/verifyotp', async (req, res) => {
    const { emailOrMobile, otp } = req.body;

    try {
        // Check if user exists
        let user = await userModel.findOne({ emailOrMobile });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if OTP matches
        if (user.otp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        // Clear OTP after verification
        user.otp = '';
        await user.save();

        res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get user profile data by emailOrMobile
app.get('/ProfileData/:emailOrMobile', async (req, res) => {
    const { emailOrMobile } = req.params;

    try {
        // Find user by emailOrMobile
        let user = await userModel.findOne({ emailOrMobile });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send user data (excluding sensitive information like password)
        res.status(200).json({
            username: user.username,
            emailOrMobile: user.emailOrMobile,
            password: user.password
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.put('/updateprofile',async(req,res)=>{

    const { emailOrMobile,username,state,city,pin,newPassword}=req.body;
    try{
        let user =await userModel.findOne({emailOrMobile});
        if(!user){
            return res.status(404).json({message:'User not found'});
        }

        user.username= username;
        user.state= state;
        user.city=city;
        user.pin=pin;
        if(newPassword){
            user.password=newPassword;
        }
        await user.save();
        res.status(200).json({message:'Profile updated Successfully'});
    }catch(error){
      console.error ("Error updating profile:",error);
      res.status(500).json({message:'Server error'})
    }

})

app.listen(9000, () => {
    console.log("Server is running on port 9000");
});