const {transaksi} = require ('../models');

class TransaksiData{
    static tambahData (req,res){
        const {nama,namaBarang,totalBarang,hargaBarang,sisaTotal} = req.body
        console.log(nama)
        const grendTotal = totalBarang * hargaBarang
        transaksi.create({ nama,namaBarang,totalBarang,hargaBarang,grendTotal,sisaTotal})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(error =>{
                console.log(error)
            })
    }

}

module.exports = TransaksiData