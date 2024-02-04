require('dotenv').config();
// async errors 
require('express-async-errors');

const express = require('express');
const app = express();
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const  connectDB  = require('./db/connect');
const productRouter = require('./routes/products');



// built-in middlewares
app.use(express.json());


// routes
app.use("/api/v1/products", productRouter);


// own middlewares
app.use(notFoundMiddleware);
app.use(errorMiddleware);


const port = process.env.PORT || 8000;
const start = async () =>{
     try {
     await connectDB(process.env.MONGO_URI);
     app.listen(port, () =>{
          console.log(`Server is listening on port ${port}....`);
     });
     } catch (error) {
     console.log(error.message);
     }
}

start();