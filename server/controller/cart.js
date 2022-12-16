const Cart = require('../models/cart.model')


const saveCart = async (req, res) => {
    const newCart = new Cart({

        nameArticle: req.body.nameArticle,
        price: req.body.price,
        quantity: req.body.quantity,
        image: req.body.image

    });
    try {
        await newCart.save().then((result) => {
            res.status(201).json(result);
        });
    } catch (error) {
        res.status(500).json(error);
    }
}





const get = async (req, res) => {
    const allCart = await Cart.find({})
    try {
        res.status(200).send(allCart)

    } catch (error) {
        res.status(401).send(error)
    }
}




const deleteCart = async (req, res) => {
    try {
        await Cart.findOneAndDelete({ id: req.params.id })
        res.send('deleted')
    }
    catch (err) {
        console.log(err)
    }
}
const deleteAll = async (req, res) => {
console.log('hi');
  
   await Cart.deleteMany({}, (err, result) => {
      if (err) console.log(err);
      res.json(result);
    });
  

};

const put = async (req, res) => {
    try {
        await Cart.findOneAndUpdate({ id: req.params.id }, {
           $inc:{ quantity: 1
}
        })
        res.send('yeey')
    }
    catch (err) {
        console.log(err)
    }
}


module.exports = { saveCart, get, put, deleteCart,deleteAll }