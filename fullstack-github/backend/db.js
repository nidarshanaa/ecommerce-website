const mongoose=require('mongoose');
mongoose.connect('mondodb://localhost:27017/ecommerce',{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,
useFindAndModify:false
});
module.exports=mongoose;