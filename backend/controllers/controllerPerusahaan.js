const {perusahaan} = require ('../models')

class controllerPerusahaan{
    static tambahData (req,res){
        const {kode,nama} = req.body
        console.log(kode)
        perusahaan.create({ kode,nama})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(error =>{
                console.log(error)
            })
    }
    static async dataPerusahaan (req,res){
        try {
            const data = await perusahaan.findAll()
            return res.status(200).json({
                data:data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = controllerPerusahaan