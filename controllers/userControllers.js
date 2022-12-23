const User=require('../models/userModel')

// const userLogin=async(req, res) => {
//       const { email, password } = req.body;
//       try {
//         const user = await User.find((email, password));
//         if (user.length > 0) {
//           const currentUser = {
//             name: user[0].name,
//             email: user[0].email,
//             isAdmin: user[0].isAdmin,
//             _id: user[0]._id
//           };
//           res.send(currentUser);
//         }
//       } catch (error) {
//         return res.status(400).json({ message: "user login failed" });
//       }
//     };
  
    const userRegister=async(req,res)=>{
        const { name, email, password } = req.body
    
      try {
        const userExists = await User.findOne({ email })
        if (userExists) {
          return res.status(400).json({ message: "User Already Exists"});
          }
        else{
          const newUser=  new User({ name, email, password })
          newUser.save()
          res.send("User Register Successfully")
         
      } }catch (error) {
        return res.status(400).json({ message: error});
   
      }}
      const userLogin=async(req,res)=>{
        const { email, password } = req.body
        try {
        const user = await User.findOne({ email,password })
      
        if (user ) {
          res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
              })
        } else {
          res.status(401).json({message:'Invalid email or password'})
        }
      }
      catch(error){
        return res.status(400).json({ message: error});
      }
    }
      //   const {  email, password } = req.body
      //   console.log(req.body)
      // try {
      //   const user = await User.find({ email,password })
        
     
      //   if (!user) {
      //     return res.status(400).json({ message: "User Login Failed"});
      //     }
      //   else{
      //              res.send(user)
         
      // } }catch (error) {
      //   return res.status(400).json({ message: error});
   
      // }
    // }
  module.exports = {userRegister,userLogin};