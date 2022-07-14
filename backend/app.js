require('dotenv').config()
const express = require('express');
const cors = require('cors')
const ControllerBarang = require('./controllers/ControllerBarang');
const ControllerUsers = require('./controllers/UserController')
const { authentication} = require('./middlewares/auth');
const controllerPerusahaan = require('./controllers/controllerPerusahaan');
const TransaksiData = require ('./controllers/controllerTransaksi')
const app = express();
const port = 8000;

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.get('/barang',ControllerBarang.dataBarang)
app.post('/barang',ControllerBarang.tambahBarang)
app.get('/perusahaan',controllerPerusahaan.dataPerusahaan)
app.post('/register',ControllerUsers.register)
app.post('/transaksi',TransaksiData.tambahData)
app.get('/transaksi',TransaksiData.dataTransaksi)
app.post('/perusahaan',controllerPerusahaan.tambahData)
app.post('/login',ControllerUsers.login)
app.get('/register',authentication,ControllerUsers.getLogin)

app.listen(port,()=>{
    console.log('server di port',port)
})