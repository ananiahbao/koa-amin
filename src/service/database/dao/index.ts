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
    bcry(length: number, password: string){
        let str: string = '';
        bcrypt.genSalt(length, async function(err: any, salt: any) {
            let bcryptStr = bcrypt.hash(password, salt, function(err: any, hash: string)  {
                 // Store hash in your password DB.
                return hash;
            });
            str =  await bcryptStr;
        });
        return str;
    }
}