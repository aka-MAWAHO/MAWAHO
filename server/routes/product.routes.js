const express =require('express'); 
const {
  saveProduct,
  getAllproducts,
  UpdateProduct,
  deleteProduct,
  findOneProduct,
  findAllinCategories,
} = require("../controller/products");
const router = express.Router();
router.post('/add', saveProduct);
router.get("/getall", getAllproducts);
router.put("/:id", UpdateProduct);
router.delete('/:id', deleteProduct)
router.get('/:name',findOneProduct)
router.get("/categories/:categorie", findAllinCategories);
module.exports = router;

