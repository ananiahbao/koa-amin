import { UserDao } from './user';

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
}