const jwt = require('jsonwebtoken')

const authentication = (req, res,next) => {
   const autHeader = req.headers['authorization'];
   const token = autHeader && autHeader.split(' ')[1];
   
   if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.SALT,(error,decoded)=>{
        if(error) return res.sendStatus(403);
        req.email = decoded.email;
        next()

    });
}

// const authorization = (req, res, next) => {
//     // console.log(req.body);
//     let { id } = req.params
//     Barang.findOne({ id: id, user: req.loggedUser.id })
//         .then(Barang => {
//             if (Barang) {
//                 next()
//             }
//             else {
//                 res.json({
//                     status: 400,
//                     message: `You're not authorize to perform this action`
//                 })
//             }
//         })
//         .catch(err => {
//             res.json({ status: 403, message: err })
//         })
// }


module.exports = {
    authentication
}