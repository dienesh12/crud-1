const express = require('express')
const asyncHandler = require(`express-async-handler`)
const router = express.Router()
const multer = require('multer')
const Detail = require(`../model/detailModel`)
const {getDeatils , getDeatil , deleteDeatils } = require('../controllers/studController')



const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'../client/public/uploads/')
    },
    filename: (req,file,cb) => {
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})

router.route('/all').get(getDeatils)

//desc => create user details
//req => POST
//route => POST /add 
router.route('/add').post(upload.single('photo'), (req, res) => {
    const name = req.body.name;
    const rollno = req.body.rollno;
    const emailID = req.body.emailID
    const photo = (req.file) ? req.file.filename : '';

    const newUserData = {
        name,
        rollno,
        emailID,
        photo
    }

    const newUser = new Detail(newUserData);
    //console.log(newUser)
    newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get(getDeatil)

router.route('/:id').put(upload.single('photo'),(req,res) => {
    Detail.findById(req.params.id)
    .then((detail) => {
        //console.log(req.body.name)
        detail.name = req.body.name;
        detail.rollno = req.body.rollno;
        detail.emailID = req.body.emailID;
        //console.log(detail.photo)
        detail.photo = req.file ? req.file.filename : detail.photo;
        //console.log(detail.photo)

        detail.save().then(() => res.json("Detail Updated")).catch(err => res.status(400).json(`Error:${err}`))
    })
    .catch(err => res.status(400).json(`Error:${err}`))
})
router.route('/:id').delete(deleteDeatils)




module.exports = router