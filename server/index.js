const express = require('express');
const massive = require('massive');
require('dotenv').config();
const app = express();
const ctrl = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db);
    console.log('db connected');
}).catch(err => console.log(err))

app.get('/api/inventory', ctrl.getInventory);

app.post('/api/product', ctrl.createProduct);

app.delete('/api/inventory/:id', ctrl.deleteProduct)

app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))