const jsonwebtoken=require("jsonwebtoken")
const secret="kerwin"
const JWT={
    generate(value,expires){
        return jsonwebtoken.sign(value,secret,{expiresIn:expires})
    },
    verify(token){
         try {
            return jsonwebtoken.verify(token,secret)
        } catch (error) {
            return false
        }
    }
}
// const token=JWT.gennerate({name:'kerwin'},'10s')
// console.log(JWT.verify(token));
module.exports=JWT