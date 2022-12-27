const Order=require('../models/orderModal')
const { v4: uuidv4 } = require('uuid');
const  stripe  = require('stripe')("sk_test_51MIbYaSJKeFFS1tcPTFnoxAvTEQdhmGy3MjkeZD8bvqjjCvgTwTiBfv916yBuZHIG9lvNaXiwwGRYCNntgkMl0DN00eIuDX94j");

const placeOrder=async(req,res)=>{
try {

    const {token,subtotal,currentUser,cartItems}=req.body
    const customer= await stripe.customers.create({
        email:token.email,
        source:token.id
    })
    console.log(token.email)
    const payment = await stripe.paymentIntents.create({
        amount: subtotal*100,
        currency: 'inr',
        customer:customer.id,
        setup_future_usage: 'off_session',
        receipt_email:token.email
      },{
            idempotencyKey:uuidv4()
        });
    // const payment=await stripe.charges.create({
    //     amount:subtotal*100,
    //     currency:'inr',
    //     customer:customer.id,
    //     receipt_email:token.email
        
    // },{
    //     idempotencyKey:uuidv4()
    // })
    // console.log(payment)

    if(payment)
    {
        const newOrder=new Order({
            name:currentUser.name,
            email:currentUser.email,
            userid:currentUser._id,
            orderItems:cartItems,
            orderAmount:subtotal,
            shippingAddress:{
                street:token.card.address_line1,
                city:token.card.address_city,
                country:token.card.address_country,
                pincode:token.card.address_zip
            },
            transactionId:payment.id
        })
        newOrder.save()
        res.send("Order Placed Successfully")
    }
    else{
        res.send("Payment failed")
    }
} catch (error) {
    return res.status(400).json({ message: error});
}
}
module.exports={placeOrder}