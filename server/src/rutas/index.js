const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('index');
});

router.post('/pdf', async (req,res) => {
    console.log(req.body);
    await req.body.save();
})
module.exports = router;