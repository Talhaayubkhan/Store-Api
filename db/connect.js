const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url).then(()=>{
    console.log("MongoDB Connected Successfully");
  }).catch((error)=>{
    console.log("MongoDB Connection Failed", error);
  });
}

module.exports = connectDB
