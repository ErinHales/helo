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
    },
    get_posts: (req,res) => {
        if(!req.query.userposts && !req.query.search) {
            req.app.get("db").get_all_posts().then(response => {
                res.status(200).send(response);
            }).catch(err => {
                res.status(500).send(err);
                console.log(err);
            })
        } else if (req.query.userposts && !req.query.search) {
            var {id} = req.params;
            req.app.get("db").get_users_posts(id).then(response => {
                res.status(200).send(response);
            }).catch(err => {
                res.status(500).send(err);
                console.log(err);
            })
        } else if (!req.query.userposts && req.query.search) {
            req.app.get("db").search_all_posts(`%${req.body.search}%`).then(response => {
                res.status(200).send(response);
            }).catch(err => {
                res.status(500).send(err);
                console.log(err);
            })
        } else {
            var id = 1;
            req.app.get("db").search_users_posts([`%${req.query.seach}%`], id).then(response => {
                res.status(200).send(response);
            }).catch(err => {
                res.status(500).send(err);
                console.log(err);
            })
        }
    },
    get_post: (req,res) => {
        req.app.get("db").get_post(req.params.id).then(response => {
            res.status(200).send(response);
        })
    }
}