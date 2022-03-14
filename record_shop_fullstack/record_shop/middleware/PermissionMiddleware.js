export const permission = () => {

    //return middleware function 
    return (req, res, next) => {

        if(!token) {
            
            return res.status(402).send({
                message:'no access'
            });

        }


    }
}