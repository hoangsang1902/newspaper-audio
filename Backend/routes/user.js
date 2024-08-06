const { User } = require('../models/user');
const { auth } = require('../middleware/auth');
const moment = require('moment');


const router = require('express').Router();

// // GET USER
// router.get("/me/:id", async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).send({ message: 'User not found' });
//         }
//         res.status(200).send({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//         });
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });


// UPDATE USER NAME
router.put("/me", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.name = req.body.name;
        await user.save();
        res.status(200).send({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;