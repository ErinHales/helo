const users = require('../users');

module.exports = {
    register: (req,res) => {
        const {username, password} = req.body;
        req.app.get("db").register_user([username,password]).then(response => {
            res.status(200).send(response);
        }).catch(err => {
            res.status(500).send(err);
            console.log(err);
        })
    },
    login: (req,res) => {
        const {username, password} = req.body;
        req.app.get("db").get_user([username,password]).then(response => {
            res.status(200).send(response);
        }).catch(err => {
            res.status(500).send(err);
            console.log(err);
        })
    }
}