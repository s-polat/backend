
import jwt from 'jsonwebtoken'

const SECRET_JWT_KEY =process.env.SECRET_JWT_KEY

//Factory 
export const auth = () => {

    //Dies ist die Middleware Function 
    return (req, res, next) => {

        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1]; 

        if(!token) {
            
            return res.status(402).send({
                message:'no access'
            });

        }

        try{

            const content = jwt.verify(token, SECRET_JWT_KEY)

            req.tokenContent = content 


            next(); // <-- sonst

        } catch (e){

            res.status(401).send({
                message:'no access'
            })

        }


    }
};