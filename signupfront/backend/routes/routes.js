const express=require('express')
const router= express.Router()
const signUpTemplateCopy=require('../models/SignUpModels')

router.post('/signup',(request,response)=>{

   const signedUpUser= new signUpTemplateCopy({
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email:request.body.email,
      //   noOfSeats:request.user.noOfSeats,
        //phone?
        seatType:request.body.seatType

   })
   signedUpUser.save()
   .then(data=>{
    response.json(data)
   })
   .catch(error=>{
    response.json(error)
   })
  
   module.exports = router

   }





 

)
module.exports=router