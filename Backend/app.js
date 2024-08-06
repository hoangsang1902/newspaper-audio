const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const mongoUrl= "mongodb+srv://Danh:admin@cluster0.c3dlcxk.mongodb.net/PaperApp";
const register = require("./routes/register");
const login = require("./routes/login");
const user = require("./routes/user");

mongoose.connect(mongoUrl).then(() => {
    console.log("Database Connected");
}).catch((e) => {
    console.log(e);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to our PaperApp API...");
});
require('dotenv').config();

app.use("/register", register);
app.use("/login", login);
app.use("/user", user);

// Import models
require('./models/user');
const User = mongoose.model('User');
// const secretKey = process.env.SECRET_KEY;

// app.post('/register', async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//         const oldUser = await User.findOne({ email: email });
//         if (oldUser) {
//             return res.send({ data: "User already exists" });
//         }

//         const encryptedPassword = await bcrypt.hash(password, 10);
//         await User.create({
//             name: name,
//             email: email,
//             password: encryptedPassword,
//         });

//         res.send({ status: 'success', data: "User created successfully" });
//     } catch (err) {
//         res.send({ status: 'error', data: err.message });
//     }
// });

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email: email });
//         if (!user) {
//             return res.status(404).send({ status: 'error', data: "User not found" });
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).send({ status: 'error', data: "Invalid credentials" });
//         }

//         const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
//         res.send({ status: 'success', data: { token } });
//     } catch (err) {
//         res.send({ status: 'error', data: err.message });
//     }
// });





app.listen(5001, () => {
    console.log("Node js server started");
});


