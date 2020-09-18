import * as jwt from 'jsonwebtoken';

const randomCode = 'ASDFGHJKL;asdfghjkl56323';

export class aboutToken {

    createToken() {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 1),
            data: 'true'
          }, randomCode);
    };
    checkToken(token: string) {
        return jwt.verify(token, randomCode, (err: any, decoded) => {
            if(decoded){
                return decoded.data
            }else{
                return false
            }
        });          
    }
}