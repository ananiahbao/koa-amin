import { UserDao } from './user';
import * as bcrypt from 'bcryptjs';

export class UserOperation {
    insert(params: any){
        return UserDao.add(params);
    }
    update(id: object, params: any){
        return UserDao.update(id, params)
    }
    delete(params: any){
        return UserDao.del(params)
    }
    find(params: any){
        return UserDao.find(params)
    }
    // 盐加密
    bcry(length: number, password: string){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(length));
    }
    // 解密
    checkBcry(password: string, hash: string){
        return bcrypt.compareSync(password, hash);
    }
}