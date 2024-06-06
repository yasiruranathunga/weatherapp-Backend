const userModel = require("../../models/userManagement/UserModel_UM");


exports.addUser = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return;
    }

    const record = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        password: req.body.password,
        userType: req.body.userType,
        specialization: req.body.specialization,
        date: new Date()
    })

    record
        .save(record)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some erro occurred while creating"
            })
        })

}




exports.login = (req, res) => {
    try {
        userModel.findOne(req.body, (err, result) => {
            if (err)
                console.log(err);
            res.send(result)
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getUserByCount = (req, res) => {
    const aggregatorOpts = [
        {
            $group: {
                _id: "$userType",
                value: { $sum: 1 },
            }
        }
    ]
    try {
        userModel.aggregate(aggregatorOpts).exec((error, result) => {
            if (error)
                return response.send(error);
            res.send(result)
        })
    } catch (error) {
        console.log(error);
    }
}

