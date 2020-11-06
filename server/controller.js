module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory()
        .then(products => {
            res.status(200).send(products)
        }).catch(err => {
            console.log(err);
            res.status(500).send("couldn't locate products")
        })
        
    },
    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        db.create_product(name, price, img)
        .then(newProduct => res.status(200).send(newProduct))
        .catch(err => res.status(500).send(err))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;
        db.delete_product(+id)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    }
}