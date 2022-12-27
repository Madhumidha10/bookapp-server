const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    name:{type:String,require},
    email:{type:String,require},
    userid:{type:String,require},
    orderItems:[],
    orderAmount:{type:Number,require},
    shippingAddress:{type:Object},
    isDelivered:{type:Boolean,require,default:false},
    transactionId:{type:String,require}

},{
    timestamps:true
})


const Order = mongoose.model('orders', orderSchema);

module.exports = Order;