const express = require('express');
const Work = require('../models/work.js');

const router = express.Router();

router.get('/',(req,res)=>{
    Work.find().sort({ createdAt: -1 })
        .then((result)=>{
            console.log(result);
            res.render('index',{ allworks: result ,title: "All works"});
        })
        .catch((err)=>console.log(err));
})


router.get('/about',(req,res)=>{
    res.render('about',{ title: 'About' });
})

router.post('/add/work',(req,res)=>{
    const work = req.body;
    const new_work = new Work({work: work.work})
    new_work.save()
        .then(()=>{
            console.log("successfully saved work to do");
            res.redirect('/');
        })
        .catch((err)=>console.log(err))
    console.log(work);
});
router.get('/delete/work/:id',(req,res)=>{
    const id = req.params.id
    Work.findByIdAndDelete(id)
        .then((result)=>{
            res.redirect('/');
        })
        .catch=((err)=>console.log(err))
    console.log("deleted Successfull");
});




module.exports = router;