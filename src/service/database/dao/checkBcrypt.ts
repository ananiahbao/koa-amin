import * as bcrypt from 'bcryptjs';

export class pasEncryption {
    // 盐加密
    bcry(password: string, length: number){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(length));
    }
    // 解密
    checkBcry(password: string, hash: string){
        return bcrypt.compareSync(password, hash);
    }
}