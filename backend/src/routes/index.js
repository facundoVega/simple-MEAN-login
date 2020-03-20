const { Router } = require('express');
const router = Router();
const User = require('../models/user');

//: Minuto  36
//LINK: https://www.youtube.com/watch?v=rPD0eY3dRqQ
const jwt = require('jsonwebtoken');
router.get('/', (req, res)=>{
    res.send("Hello world");
});

router.post('/signup', async (req, res)=>{
    const { email, password } = req.body; 
    const newUser = new User({email, password});
    const addedUser = await newUser.save();
    const token = jwt.sign({ _id: addedUser._id} , 'secretKey' );
    res.status(200).json({token});
});

router.post('/signin', async(req, res)=>{
   
    const { email, password } = req.body;
    const user = await User.findOne({email:email});
    if(!user) return res.status(401).send("The email does not exists");
    if(user.password!= password)return res.status(401).send("Wrong Password");
    const token = jwt.sign({_id: user._id}, 'secretKey');
    res.status(200).send({token});

});


router.get('/tasks', (req, res)=>{
    res.json([
        {
            _id:1,
            name: 'Task one',
            description: 'Lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        },
        {
            _id:2,
            name: 'Task two',
            description: 'Lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        },
        {
            _id:3,
            name: 'Task three',
            description: 'Lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        }

    ]);

});
    

router.get('/private-tasks',verifyToken, (req, res)=>{
    
    res.json([
        {
            _id:1,
            name: 'Task one',
            description: 'Lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        },
        {
            _id:2,
            name: 'Task two',
            description: 'Lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        },
        {
            _id:3,
            name: 'Task three',
            description: 'Lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        }

    ]);
});


    


module.exports = router;


function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauhtorized request');
    }
    const token = req.headers.authorization.split(' ')[1];
    if(token == null){
        return res.status(401).send('Unauhtorized request');
    }

    const payload = jwt.verify(token,'secretKey');
    console.log(payload);
    req.userId = payload._id;
    next();
}
  