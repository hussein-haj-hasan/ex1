import jwt from 'jsonwebtoken'
export default function user(req,res){
    if(!req.body){
        res.status(404)
        res.end("error")
    }
    else{
        const {username,password}=req.body  
        res.status(200).json({token:
            jwt.sign({username},'secret')
        })
    
    }
}