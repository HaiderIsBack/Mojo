const Products = require("../models/product");

// GET:
const getSingleProduct = async (req, res) => {
    try{
        const { productId } = req.params;

        if(!productId){
            return res.status(400).json({success: false, message: "Send required fields"});
        }

        const product = await Products.findById(productId);

        if(product){
            return res.status(200).json({success: true, product});
        }else{
            return res.status(404).json({success: false, productId});
        }
    }catch(e){
        console.error(e);
        res.status(500).send("Server error has occured");
    }
}

// POST: 
const createSingleProduct = async (req, res) => {
    try{
        const { name, description, imageUrl, price, quantity, categories, details } = req.body;
        
        if(!name || !imageUrl || !price || !quantity || !categories || !details){
            return res.status(400).json({success: false, message: "Send required fields"});
        }

        const existingProduct = await Products.findOne({ name });

        if(!existingProduct){
            const newProduct = await Products.create({
                name,
                description,
                imageUrl,
                price,
                quantity,
                categories,
                details
            });
            return res.status(200).json({success: true, newProduct});
        }else{
            return res.status(218).json({success: false, message: "Product already exists against this name"})
        }
    }catch(e){
        console.error(e);
        res.status(500).send("Server error has occured");
    }
}

module.exports = {
    getSingleProduct,
    createSingleProduct
}