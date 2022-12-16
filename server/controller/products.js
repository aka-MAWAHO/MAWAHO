
const Product =require('../models/product.model')

// Add new product
const saveProduct = async(req,res) => { 
  const body=req.body
 try {
   await Product.create(body, (err, result) => {
     if (err) res.json(err);
    res.status(201).json(result);
   });
 } catch (err) {
   res.status(500).json(error);
 }

// const newProduct = new Product({

//   name: req.body.name,
//   price: req.body.price,
//   description: req.body.description,
//   color: req.body.color,
//   size: req.body.size,
//   gender: req.body.gender,
//   categorie:req.body.categorie,
//   enum : req.body.enum,
//   brande: req.body.brande,
//   closeView: req.body.closeView,
//   fullView: req.body.fullView,
//   withoutModel: req.body.withoutModel
  
// });
// try {
//   await newProduct.save().then((result) => {
//     res.status(201).json(result);
//   });
// } catch (error) {
//   res.status(500).json(error);
// } 
} 

// Get All Product

  const getAllproducts =  async (req,res) => {
const allProduct =  await Product.find({})
   try {
    res.status(200).send(allProduct)

   } catch (error) {
    res.status(401).send(error)
   }
  } 
  //Get one product

  const findOneProduct = async (req, res) => {
    const oneProduct = await Product.findOne({ name: req.params.name });
    try {
      res.status(201).json(oneProduct);
    } catch (err) {
      res.status(500).json(err);
    }

  };

  const findAllinCategories = async (req, res) => {
    const OneCategorie = await Product.findOne({ categorie: req.params.categorie });
    try {
      res.status(201).json(OneCategorie);
    } catch (err) {
      res.status(500).json(err);
    }
  };

// Delete product

  const deleteProduct = async(req,res) =>{ 
    try { 
      await Product.findOneAndDelete({_id:req.params.id})
      res.json('deleted')
    }
    catch (err){
     res.json(err)
    }
  }
  
// Modify Product 

  const UpdateProduct =async(req,res) =>{ 
    const body=req.body
    try { 
      await Product.findOneAndUpdate({_id:req.params.id},body
  //       {
        
  // name: req.body.name,
  // price: req.body.price,
  // description: req.body.description,
  // color: req.body.color,
  // size: req.body.size,
  // gender: req.body.gender,
  // categorie:req.body.categorie,
  // enum : req.body.enum,
  // brande: req.body.brande,
  // closeView: req.body.closeView,
  // fullView: req.body.fullView,
  // withoutModel: req.body.withoutModel

  //     }
      )
      res.json('yeey')
    }
    catch (err){
      console.log(err)
    }
  }





      module.exports = {
        saveProduct,
        getAllproducts,
        UpdateProduct,
        deleteProduct,
        findOneProduct,
        findAllinCategories
      };