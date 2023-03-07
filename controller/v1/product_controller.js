//import product schema
const ProductDB = require('../../models/product');
module.exports.updateProduct = async function (req, res) {
    try {
        //find products in payload array
        for (let pro of req.body.payload) {
          
            //find product avalible in DB 
            let product =await ProductDB.findOne({productId: pro.productId});

            //if product not found just return 
            if (!product) {
                return res.status(401).json({
                    message: "Product not found in DB first Add product in DB"
                })
            }
            //find oprations 
            if (pro.operation == 'add') {
                product.qty = parseInt(product.qty) + parseInt(pro.quantity);
                product.save();
            }
            else if (product.operation == 'subtract') {
                product.qty = parseInt(product.qty) - parseInt(pro.quantity);
                product.save();
            }

            //return res
            return res.status(200).json({
                message: "update Successfully"
            })
        }


    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internel server error"
        })
    }

}