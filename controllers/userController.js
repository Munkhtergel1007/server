const User = require('../model/user');

class userController {
    newUser(req, res) {
        const { email } = req.body;
        const { username } = req.body;
        const { password } = req.body;
        const user = new User({
            email: email,
            username: username,
            password: password
        })
        user.save()
            .then(result => {
                res.json({
                    message: 'Амжилттай бүртгэгдлээ',
                    data: result._id.toString()
                })
            })

    }
    loginUser(req, res) {
        const { email } = req.body;
        const { password } = req.body;

        User.findOne({ email: email })
            .then(user => {
                if (user.password === password) {
                    res.json({
                        message: "Amjilttai",
                        id: user._id.toString()
                    })
                }
            })
    }
}
module.exports = new userController();