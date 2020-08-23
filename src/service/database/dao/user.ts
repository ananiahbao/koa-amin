import { getManager } from 'typeorm';
import User from '../entity/user';

interface UserInfo {
    username: string;
    password: string;
    email: string;
    telephone: string; 
    wechat: string; 
    time:number; 
    ip: string;
    nickname: string
}

export const UserDao = {
    //user 表中插入数据
    add: async (params: UserInfo) => {
        const entityManager = getManager();
        let user = new User();

        user.username = params.username;
        user.password = params.password;
        user.email = params.email;
        user.telephone = params.telephone;
        user.wechat = params.wechat;
        user.time = params.time;
        user.ip = params.ip;
        user.nickname = params.nickname;

        return await entityManager.save(User, user);
    },
    /***
     * majro 主要标识
     * needParam 需要修改的
     */
    update: async (majro: object, needParam: UserInfo) => {
        const entityManager = getManager();
        return await entityManager.update(User, majro, needParam);
    },
    // 删除
    del: async (params: UserInfo) => {
        const entityManager = getManager();
        return await entityManager.delete(User,params);
    },
    //查找
    find: async (params: UserInfo) => {
        const entityManager = getManager();
        return await entityManager.find(User, params);
    }
}