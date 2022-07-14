const {Barang} = require('../models')
class ControllerBarang{
    static async dataBarang (req,res){
        try {
            const barang = await Barang.findAll()
            return res.status(200).json({
                data:barang
            })
        } catch (error) {
            console.log(error)
        }

    }
    static tambahBarang (req,res){
        const {nama,harga,stock} = req.body
        Barang.create({ nama,harga,stock})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(error =>{
                console.log(error)
            })
    }
}
module.exports = ControllerBarang