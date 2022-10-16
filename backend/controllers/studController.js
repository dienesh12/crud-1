const asyncHandler = require(`express-async-handler`)
const Detail = require(`../model/detailModel`)



//desc => get user details
//req => GET
//route => GET /all
const getDeatils = asyncHandler(async (req,res) => {   //adding async because the database returns a promise to controller function
    const detail = await Detail.find()

    res.status(200).json(detail)
})

//desc => get update user detail
//req => GET
//route => PUT /:id
const getDeatil = asyncHandler(async (req,res) => {

    const detail = await Detail.findById(req.params.id)
    
    res.status(200).json(detail)
})

//desc => update user details
//req => PUT
//route => PUT /:id


//desc => delete user details
//req => DELETE
//route => DELETE /:id
const deleteDeatils = asyncHandler(async (req,res) => {

    await Detail.deleteOne({_id: req.params.id})

    res.status(200).json({_id: req.params.id})
})



module.exports = {
    getDeatils,
    getDeatil,
    deleteDeatils,
}