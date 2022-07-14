const {User}= require('../models')
const {compare} = require('../helpers/bcrypt')
const {generateToken,RefreshToken} = require('../helpers/jwt')

class ControllerUsers{
    static register(req, res) {
        let { username, email, password} = req.body
        User.create({ username, email, password})
            .then(newUser => {
                res.status(201).json(newUser)
            })
            .catch(error =>{
                console.log(error)
            })
    }
    static getLogin(req,res){
        User.findAll()
        .then(user=>{
            res.status(200).json({
                data:user
            })
        })
    }
    static login(req, res) {
        let { email, password } = req.body
       
        User.findAll({
            where: {
              email: email
            }
          })
            .then(user => {
                if (user == []) {
                    res.status(404).json({ message: 'Invalid password or email' })
                } else{
                    let authPass = compare(password, user[0].password)
                    if (authPass) {
                        let username = user[0].username,
                            email = user[0].email,
                            id = user[0].id;

                        const AksesToken = generateToken({
                            username: username,
                            email: email,
                            id: id
                        })
                        const refreshToken = RefreshToken({
                            username: username,
                            email: email,
                            id: id
                        })
                        User.update({refresh_token:refreshToken},{
                            where:{
                                id:id
                            }
                        });
                        res.cookie('refreshToken',refreshToken,{
                            httpOnly:true,
                            maxAge:24*60*60*1000
                        })
                        res.status(200).json({ AksesToken, username, email })
                    } else {
                        res.status(403).json({message: 'Invalid password or email' })
                    }
                }
            })
            .catch(error=>{
                console.log(error)
            })
    }
}

module.exports = ControllerUsers