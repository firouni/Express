const router = express.router();
const { v4: uuidv4 } = require ('uuid');

//user list import
let userList = require("../Data")

//get request
router.get('/getuser',(req,res)=>{
    res.send(userList)
})

//put
router.put('/upduser',(req,res)=>{
    const id = req.params.id
    const userUpd = userList.find(user => user.id == id)
    let editUser = {...userUpd; ...req.body}
    res.json({msg:'user edited', editUser})
})

//post
router.post('/adduser',(req,res)=>{
    //id demand
    const newUser={
        ...req.body, id:uuidv4()
    }
    //obj add
    if(!newUser.name){
        return res.jason({msg:'enter name please'})
    }
    else if(!newUser.email){
        return res.jason({msg:'enter an email address please'})
    }
    userList.push(newUser)
    res.json({msg:"user added", userList, newUser})
})

//delete
router.delete('/:id', (req,res)=>{
    const id = req.params.id
    userList = userList.filter(user => user.id != id)
    res.json({msg:"user deleted", userList})
})

module.exports = router;