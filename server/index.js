const express = require('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const app = express()
const productRoute= require ('./routes/product.routes')
const CartRoute = require ('./routes/Cart.routes')
const userRouter = require('./routes/user.routes');
const feedRouter = require('./routes/feedback.routes')
app.use(express.json())
app.use (cors())


app.use ('/product',productRoute)
app.use('/Cart',CartRoute)
app.use('/user',userRouter)
app.use ('/feed',feedRouter)


const db= "mongodb+srv://root:root@cluster0.pwlxki1.mongodb.net/AKA"; 
mongoose.set('strictQuery',true) 
mongoose .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => {
  console.log('Database temchi mrigla ..');
})
.catch((err) => console.log(err));

const PORT=8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
  });