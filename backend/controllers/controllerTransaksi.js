const {transaksi} = require ('../models');

class TransaksiData{
    static tambahData (req,res){
        const {nama,namaBarang,totalBarang,hargaBarang,sisaTotal} = req.body
        console.log(nama)
        const grendTotal = null
        transaksi.create({ nama,namaBarang,totalBarang,hargaBarang,grendTotal,sisaTotal})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    static async dataTransaksi (req,res){
        try {
            const data = await transaksi.findAll()
            return res.status(200).json({
                data:data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = TransaksiData