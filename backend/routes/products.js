const router = require("express")();
const { getSingleProduct, createSingleProduct } = require("../controllers/products");

router.route("/product").post(createSingleProduct);
router.route("/product/:productId").get(getSingleProduct);

module.exports = router