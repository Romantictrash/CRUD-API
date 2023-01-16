const Express = require("express");
const User = require("../models/user");
const router = Express.Router();

router.post('/register', async (req, res) => {
    try{
        const user = await User.create(req.body);
        return res.send({user});
    }
    catch(erro){
        return res.status(400).send({error: 'Registration Failed'});
    }
});


module.exports = app => app.use('/auth', router);
