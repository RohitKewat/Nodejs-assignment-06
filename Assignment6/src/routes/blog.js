const router = require('express').Router();
const Blog = require('../models/Blog')
const bodyParser = require('body-parser')

// Your routing code goes here
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

router.use(bodyParser.json())

router.get('/blog',(req,res)=>{
    res.json({ok:'blog'})
})

router.post("/blog",async(req,res)=>{
   
    try{
        // const data = await Blog.create(req.body);
        const data = await Blog.find();

        res.status(201).json({

            status : "success",
            data

        })
    }catch(e){
            res.status(500).json({
                status: "failed",
                message : e.message
            })
    }

})

module.exports = router;